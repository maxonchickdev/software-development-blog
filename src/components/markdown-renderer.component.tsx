import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type MarkdownRendererProps = {
  readonly content: string;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps): React.ReactElement => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children, ...props }) {
          const match = /language-(\w+)/.exec(className ?? "");
          const code = String(children).replace(/\n$/, "");

          return match != null ? (
            <SyntaxHighlighter
              style={oneLight}
              PreTag="div"
              language={match[1]}
              customStyle={{
                margin: 0,
                borderRadius: "0.25rem",
                fontSize: "0.875rem",
              }}
              codeTagProps={{ style: {} }}
            >
              {code}
            </SyntaxHighlighter>
          ) : (
            <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm" {...props}>
              {children}
            </code>
          );
        },
        h1: ({ children }) => (
          <h1 className="mt-8 text-2xl font-bold first:mt-0">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-6 text-xl font-semibold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-4 text-lg font-medium">{children}</h3>
        ),
        p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
        ul: ({ children }) => (
          <ul className="my-4 list-inside list-disc space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-4 list-inside list-decimal space-y-1">{children}</ol>
        ),
        li: ({ children }) => <li className="ml-4">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-black pl-4">
            {children}
          </blockquote>
        ),
        pre: ({ children }) => <div className="my-4">{children}</div>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
