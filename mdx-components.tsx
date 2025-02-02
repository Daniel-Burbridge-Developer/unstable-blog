import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Heading level 1 – large, bold, with ample margin
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-800 my-8">
        {children}
      </h1>
    ),
    // Heading level 2 – slightly smaller and semibold
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-700 my-6">
        {children}
      </h2>
    ),
    // Heading level 3 – medium size and weight
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-gray-700 my-4">
        {children}
      </h3>
    ),
    // Paragraph – comfortable line-height and margin
    p: ({ children }) => (
      <p className="text-base leading-relaxed text-gray-600 my-4">
        {children}
      </p>
    ),
    // Link – blue with hover underline
    a: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    // Image – using Next.js Image with rounded corners and shadow,
    // wrapped in a div to add vertical spacing
    img: (props) => (
      <div className="my-6">
        <Image
          sizes="100vw"
          className="rounded-lg shadow-md"
          style={{ width: '100%', height: 'auto' }}
          {...(props as ImageProps)}
        />
      </div>
    ),
    // Unordered List – styled with disc bullets inside the container
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-4">
        {children}
      </ul>
    ),
    // Ordered List – styled with decimal numbering
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-4">
        {children}
      </ol>
    ),
    // Blockquote – with a left border, padding, and italic text
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    // Inline Code – with a subtle background and rounded corners
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    // Preformatted Code Block – dark background with monospaced font,
    // padding, and horizontal scrolling for overflow
    pre: ({ children }) => (
      <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto my-4">
        {children}
      </pre>
    ),
    ...components,
  };
}
