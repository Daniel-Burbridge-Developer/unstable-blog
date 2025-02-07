// import { SignedOut, SignedIn, SignInButton } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center min-h-svh">{children}</div>
  );
}
