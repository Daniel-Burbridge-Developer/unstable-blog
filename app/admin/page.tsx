import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

const adminPage = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>"Welcome User"</SignedIn>
    </div>
  );
};

export default adminPage;
