import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Unstable <span className="text-[hsl(280,100%,70%)]">Blog</span>
        </h1>
        <ul>
          <li>
            <Link
              href="/admin"
              className="text-blue-500 visited:text-red-400 hover:underline"
            >
              admin
            </Link>
          </li>
          <li>
            <Link
              href="/admin/uploader"
              className="text-blue-500 visited:text-red-400 hover:underline"
            >
              uploader
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
