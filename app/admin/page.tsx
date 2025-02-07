import { SignOutButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const adminPage = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return (
    <div>
      <h1>Hello There</h1> <SignOutButton />
    </div>
  );
};

export default adminPage;
