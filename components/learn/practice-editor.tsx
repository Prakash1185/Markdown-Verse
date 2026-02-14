"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface PracticeEditorProps {
    instructions: string;
    defaultCode: string;
}

const PracticeEditor = ({ instructions, defaultCode }: PracticeEditorProps) => {
    const [code, setCode] = useState(defaultCode);

    const handleReset = () => {
        setCode(defaultCode);
    };

    return (
        <div className="border border-foreground/10 mt-10">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-foreground/10 bg-primary/5">
                <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                        Practice
                    </h3>
                    {/* <p className="text-xs text-muted-foreground mt-0.5">
                        {instructions}
                    </p> */}
                </div>
                <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                >
                    <RotateCcw size={12} />
                    Reset
                </button>
            </div>

            {/* Editor & Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Editor */}
                <div className="border-b md:border-b-0 md:border-r border-foreground/10">
                    <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02]">
                        Markdown Input
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 p-4 bg-background font-mono text-sm resize-none focus:outline-none text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Write your Markdown here..."
                        spellCheck={false}
                    />
                </div>

                <div>
                    <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02]">
                        Live Preview
                    </div>
                    <div className="p-4 h-64 overflow-y-auto prose-markdown prose-light bg-white">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{code}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeEditor;
