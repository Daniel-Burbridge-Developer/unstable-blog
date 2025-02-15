import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Example: Override <pre> to style code blocks with blue accents
    pre: (props) => (
      <pre className="bg-slate-900 p-4 rounded overflow-x-auto">
        {props.children}
      </pre>
    ),
    // You can add other component overrides here (e.g., blockquote, a, etc.)
  };
}
