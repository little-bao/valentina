import { SignedOut, SignInButton } from "@clerk/nextjs";
import { UserRound } from "lucide-react";

const UserInfo = () => {
  return (
    <div className="nav-gradient cursor-pointer rounded-full border p-2">
      <SignedOut>
        <SignInButton mode="modal">
          <UserRound size={20} />
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default UserInfo;
