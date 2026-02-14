"use client";

import { useState } from "react";
import { RotateCcw, Trash2, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import rehypeRaw from "rehype-raw";

const defaultPlaygroundCode = `# Welcome to the Playground! 🎮

This is your **Markdown sandbox**. Write anything you want and see it rendered in real-time!

## Try These Out

### Text Formatting
- **Bold text** and *italic text*
- ~~Strikethrough~~ and \`inline code\`
- ***Bold and italic*** combined

### A Blockquote
> "The best way to learn is by doing."
> — MarkdownVerse

### Code Block
\`\`\`javascript
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

### A Table
| Feature | Status |
|---------|--------|
| Headings | ✅ Done |
| Lists | ✅ Done |
| Tables | ✅ Done |

### Task List
- [x] Open the playground
- [x] Write some Markdown
- [ ] Become a Markdown pro!

---

*Happy writing! ✨*
`;

export default function PlaygroundPage() {
    const [code, setCode] = useState(defaultPlaygroundCode);

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col max-w-7xl mx-auto border-l border-r">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-card/50 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <Link
                        href="/learn"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
                    >
                        <ArrowLeft size={12} />
                        Back to Learn
                    </Link>
                    <span className="text-[11px] uppercase tracking-wider text-primary font-medium border border-primary/30 bg-primary/10 px-2 py-0.5">
                        Playground
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCode(defaultPlaygroundCode)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                    >
                        <RotateCcw size={12} />
                        <span className="hidden sm:inline">Reset</span>
                    </button>
                    <button
                        onClick={() => setCode("")}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                    >
                        <Trash2 size={12} />
                        <span className="hidden sm:inline">Clear</span>
                    </button>
                </div>
            </div>

            {/* Editor & Preview */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Editor Pane */}
                <div className="flex-1 flex flex-col min-h-0 md:min-h-full border-b md:border-b-0 md:border-r border-foreground/10">
                    <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02] flex-shrink-0">
                        Markdown Input
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="flex-1 p-4 bg-background font-mono text-sm resize-none focus:outline-none text-foreground placeholder:text-muted-foreground/50 min-h-[200px] md:min-h-0"
                        placeholder="Start writing Markdown here..."
                        spellCheck={false}
                    />
                </div>

                {/* Preview Pane */}
                <div className="flex-1 flex flex-col min-h-0 md:min-h-full">
                    <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02] flex-shrink-0">
                        Live Preview
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto prose-markdown prose-light bg-white min-h-[200px] md:min-h-0">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{code}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
