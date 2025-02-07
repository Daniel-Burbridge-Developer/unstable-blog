import { SignOutButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

const adminPage = async () => {
  const { userId, redirectToSignIn } = await auth();
  const user = await currentUser();

  if (!userId) return redirectToSignIn();
  if (
    !(user?.publicMetadata.roles as string[]).some((role) => role === 'admin')
  )
    return 'Access Denied';

  return (
    <div>
      <h1>Hello Admin</h1>
    </div>
  );
};

export default adminPage;
