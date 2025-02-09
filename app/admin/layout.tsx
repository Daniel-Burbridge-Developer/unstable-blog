import { auth, currentUser } from '@clerk/nextjs/server';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId, redirectToSignIn } = await auth();
  const user = await currentUser();

  if (!userId) return redirectToSignIn();
  if (
    !(user?.publicMetadata.roles as string[]).some((role) => role === 'admin')
  )
    return 'Access Denied';

  return (
    <div className="flex justify-center items-center min-h-svh">{children}</div>
  );
}
