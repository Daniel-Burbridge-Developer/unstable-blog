import { SignOutButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

const adminPage = async () => {
  const { userId, redirectToSignIn } = await auth();
  const user = await currentUser();

  if (!userId) return redirectToSignIn();

  return (
    <div>
      <h1>Hello There</h1> <SignOutButton />
      <h1>
        {(user?.publicMetadata.roles as string[]).some(
          (role) => role === 'admin'
        )
          ? 'Hello admin'
          : null}
      </h1>
    </div>
  );
};

export default adminPage;
