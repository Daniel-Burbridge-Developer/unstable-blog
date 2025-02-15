export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <article className="max-w-prose mx-auto p-6 prose prose-lg prose-invert">
        {children}
      </article>
    </div>
  );
}
