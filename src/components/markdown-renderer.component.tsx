import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
	readonly content: string;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps): React.ReactElement => {
	return (
		<ReactMarkdown
			components={{
				blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-black pl-4">{children}</blockquote>,
				code({ className, children, ...props }) {
					const match = /language-(\w+)/.exec(className ?? "");
					const code = String(children).replace(/\n$/, "");

					return match != null ? (
						<SyntaxHighlighter
							codeTagProps={{ style: {} }}
							customStyle={{
								borderRadius: "0.25rem",
								fontSize: "0.875rem",
								margin: 0,
							}}
							language={match[1]}
							PreTag="div"
							style={oneLight}
						>
							{code}
						</SyntaxHighlighter>
					) : (
						<code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-sm" {...props}>
							{children}
						</code>
					);
				},
				h1: ({ children }) => <h1 className="mt-8 text-2xl font-bold first:mt-0">{children}</h1>,
				h2: ({ children }) => <h2 className="mt-6 text-xl font-semibold">{children}</h2>,
				h3: ({ children }) => <h3 className="mt-4 text-lg font-medium">{children}</h3>,
				li: ({ children }) => <li className="ml-4">{children}</li>,
				ol: ({ children }) => <ol className="my-4 list-inside list-decimal space-y-1">{children}</ol>,
				p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
				pre: ({ children }) => <div className="my-4">{children}</div>,
				ul: ({ children }) => <ul className="my-4 list-inside list-disc space-y-1">{children}</ul>,
			}}
			remarkPlugins={[remarkGfm]}
		>
			{content}
		</ReactMarkdown>
	);
};
