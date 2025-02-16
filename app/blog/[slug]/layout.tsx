export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <article className="mx-auto p-6 prose prose-lg max-w-[90ch] prose-invert">
        {children}
      </article>
    </div>
  );
}
