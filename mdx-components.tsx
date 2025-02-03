import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import React from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // H1 – extra-large, bold, indigo headline with ample spacing
    h1: (props) => (
      <h1 className="mt-8 mb-4 text-5xl font-bold text-indigo-900" {...props} />
    ),
    // H2 – large, semibold, using a slightly lighter indigo tone
    h2: (props) => (
      <h2 className="mt-8 mb-4 text-4xl font-semibold text-indigo-800" {...props} />
    ),
    // H3 – medium-large with medium weight and a soft indigo hue
    h3: (props) => (
      <h3 className="mt-6 mb-3 text-3xl font-medium text-indigo-700" {...props} />
    ),
    // Paragraph – standard text size, relaxed line-height and a neutral gray tone
    p: (props) => (
      <p className="mb-4 text-base leading-relaxed text-gray-700" {...props} />
    ),
    // Link – indigo text that deepens on hover with a smooth transition
    a: (props) => (
      <a className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200" {...props} />
    ),
    // Image – Next.js Image with full-width display, rounded corners, and a subtle shadow
    img: (props) => (
      <div className="my-6">
        <Image
          sizes="100vw"
          className="rounded-lg shadow-lg"
          style={{ width: '100%', height: 'auto' }}
          {...(props as ImageProps)}
        />
      </div>
    ),
    // Unordered list – disc bullets, inside indentation, with consistent spacing
    ul: (props) => (
      <ul className="list-disc list-inside my-4 space-y-1" {...props} />
    ),
    // Ordered list – decimal numbering inside with vertical spacing
    ol: (props) => (
      <ol className="list-decimal list-inside my-4 space-y-1" {...props} />
    ),
    // List item – with a small bottom margin for spacing
    li: (props) => (
      <li className="mb-1" {...props} />
    ),
    // Blockquote – left border in indigo, padding, and italic text
    blockquote: (props) => (
      <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 my-6" {...props} />
    ),
    // Inline code – subtle background and indigo text with rounded corners
    code: (props) => (
      <code className="bg-gray-200 text-indigo-700 px-1 py-0.5 rounded text-sm" {...props} />
    ),
    // Preformatted code block – dark background with light text, padding, and horizontal scrolling
    pre: (props) => (
      <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto my-6" {...props} />
    ),
    // Table – add 'not-prose' to disable the default prose styles
    table: (props) => (
      <table className="not-prose min-w-full border-collapse border border-gray-200 my-6" {...props} />
    ),
    // Table Header – add 'not-prose' here as well
    th: (props) => (
      <th className="not-prose px-4 py-2 border border-gray-200 bg-gray-50 text-indigo-900" {...props} />
    ),
    // Table Data – add 'not-prose' to ensure custom styles are used
    td: (props) => (
      <td className="not-prose px-4 py-2 border border-gray-200 text-gray-700" {...props} />
    ),
    ...components,
  };
}
