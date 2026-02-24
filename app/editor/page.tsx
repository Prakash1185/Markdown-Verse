"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Code2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Download,
  Undo2,
  Redo2,
  RemoveFormatting,
  Minus,
  ChevronDown,
  ArrowLeft,
  AArrowUp,
  AArrowDown,
} from "lucide-react";
import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "markdown">("preview");
  const [markdown, setMarkdown] = useState("");
  const [showHeadingDropdown, setShowHeadingDropdown] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        codeBlock: {
          HTMLAttributes: {
            class: "editor-code-block",
          },
        },
        horizontalRule: {},
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing your content here...",
      }),
    ],
    immediatelyRender: false,
    content: "",
    editorProps: {
      attributes: {
        class: "editor-content-area",
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setMarkdown(turndown.turndown(html));
    },
  });

  const downloadMarkdown = useCallback(() => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.md";
    a.click();
    URL.revokeObjectURL(url);
  }, [markdown]);

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 10));
  };

  if (!editor) return null;

  const isActive = (format: string, attrs?: Record<string, unknown>) =>
    editor.isActive(format, attrs);

  const btn = (active: boolean = false) =>
    `p-2 border transition-colors duration-200 cursor-pointer ${
      active
        ? "border-primary/40 bg-primary/10 text-primary"
        : "border-foreground/10 text-muted-foreground hover:text-foreground hover:border-foreground/30"
    }`;

  const divider = (
    <div className="w-px h-6 bg-foreground/10 mx-1 self-center" />
  );

  const getCurrentHeading = () => {
    if (editor.isActive("heading", { level: 1 })) return "H1";
    if (editor.isActive("heading", { level: 2 })) return "H2";
    if (editor.isActive("heading", { level: 3 })) return "H3";
    return "Normal";
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col max-w-7xl mx-auto border-l border-r border-foreground/10">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-card/50 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
          >
            <ArrowLeft size={12} />
            Home
          </Link>
          <span className="text-[11px] uppercase tracking-wider text-primary font-medium border border-primary/30 bg-primary/10 px-2 py-0.5">
            Editor
          </span>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 border-b border-foreground/10 bg-foreground/[0.02]">
        {/* Heading Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowHeadingDropdown(!showHeadingDropdown)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border transition-colors duration-200 cursor-pointer ${
              isActive("heading")
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-foreground/10 text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {getCurrentHeading()}
            <ChevronDown size={12} />
          </button>

          {showHeadingDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowHeadingDropdown(false)}
              />
              <div className="absolute top-full left-0 mt-1 z-20 border border-foreground/10 bg-card shadow-lg min-w-[140px]">
                <button
                  onClick={() => {
                    editor.chain().focus().setParagraph().run();
                    setShowHeadingDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    !isActive("heading")
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                  }`}
                >
                  Normal
                </button>
                {[1, 2, 3].map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: level as 1 | 2 | 3 })
                        .run();
                      setShowHeadingDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 transition-colors ${
                      isActive("heading", { level })
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                    } ${
                      level === 1
                        ? "text-lg font-bold"
                        : level === 2
                        ? "text-base font-semibold"
                        : "text-sm font-medium"
                    }`}
                  >
                    Heading {level}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {divider}

        {/* Text Formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(isActive("bold"))}
        >
          <Bold size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(isActive("italic"))}
        >
          <Italic size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btn(isActive("underline"))}
        >
          <UnderlineIcon size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={btn(isActive("strike"))}
        >
          <Strikethrough size={15} />
        </button>

        {divider}

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btn(isActive("bulletList"))}
        >
          <List size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={btn(isActive("orderedList"))}
        >
          <ListOrdered size={15} />
        </button>

        {divider}

        {/* Block Formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={btn(isActive("blockquote"))}
        >
          <Quote size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={btn(isActive("code"))}
        >
          <Code size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={btn(isActive("codeBlock"))}
        >
          <Code2 size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={btn()}
        >
          <Minus size={15} />
        </button>

        {divider}

        {/* Alignment */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={btn(editor.isActive({ textAlign: "left" }))}
        >
          <AlignLeft size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={btn(editor.isActive({ textAlign: "center" }))}
        >
          <AlignCenter size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={btn(editor.isActive({ textAlign: "right" }))}
        >
          <AlignRight size={15} />
        </button>

        {divider}

        {/* Font Size */}
        <button onClick={decreaseFontSize} className={btn()}>
          <AArrowDown size={15} />
        </button>
        <span className="text-[11px] text-muted-foreground font-mono px-1 self-center select-none">
          {fontSize}
        </span>
        <button onClick={increaseFontSize} className={btn()}>
          <AArrowUp size={15} />
        </button>

        {divider}

        {/* Undo / Redo */}
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={`${btn()} disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <Undo2 size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={`${btn()} disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <Redo2 size={15} />
        </button>

        {divider}

        {/* Clear Formatting */}
        <button
          onClick={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
          className={btn()}
        >
          <RemoveFormatting size={15} />
        </button>
      </div>

      {/* MAIN CONTENT — Side by Side */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* LEFT — Rich Text Editor */}
        <div className="flex-1 flex flex-col min-h-0 md:min-h-full border-b md:border-b-0 md:border-r border-foreground/10">
          <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02] flex-shrink-0">
            Rich Text Editor
          </div>
          <div
            className="flex-1 overflow-y-auto"
            style={{ fontSize: `${fontSize}px` }}
          >
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* RIGHT — Preview / Markdown Panel */}
        <div className="flex-1 flex flex-col min-h-0 md:min-h-full">
          {/* Tab Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-foreground/[0.02] flex-shrink-0">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium transition-colors duration-200 cursor-pointer border ${
                  activeTab === "preview"
                    ? "text-primary border-primary/30 bg-primary/10"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab("markdown")}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium transition-colors duration-200 cursor-pointer border ${
                  activeTab === "markdown"
                    ? "text-primary border-primary/30 bg-primary/10"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                Markdown
              </button>
            </div>

            {activeTab === "markdown" && (
              <button
                onClick={downloadMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
              >
                <Download size={12} />
                Download .md
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto min-h-[200px] md:min-h-0">
            {activeTab === "preview" ? (
              <div className="p-6 prose-markdown">
                {markdown ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {markdown}
                  </ReactMarkdown>
                ) : (
                  <p className="text-muted-foreground/50 text-sm italic">
                    Your live preview will appear here as you type...
                  </p>
                )}
              </div>
            ) : (
              <div className="h-full">
                <textarea
                  value={markdown}
                  readOnly
                  className="w-full h-full min-h-[300px] font-mono text-sm bg-white text-black focus:outline-none resize-none p-2"
                  placeholder="Markdown output will appear here..."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
