import { SignedOut, SignedIn, SignIn } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center min-h-svh">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>{children}</SignedIn>
    </div>
  );
}
