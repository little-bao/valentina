import { SignedOut, SignInButton } from "@clerk/nextjs";
import { UserRound } from "lucide-react";

const UserInfo = () => {
  return (
    <SignedOut>
      <SignInButton mode="modal">
        <div className="nav-gradient cursor-pointer rounded-full border p-2 transition duration-300 hover:border-black/20 hover:dark:border-white/50">
          <UserRound size={20} />
        </div>
      </SignInButton>
    </SignedOut>
  );
};

export default UserInfo;
