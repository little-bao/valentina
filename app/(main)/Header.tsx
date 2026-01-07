import { Container } from "@/components/ui/Container";

import NavigationBar from "./NavigationBar";
import ThemeSwitcher from "./ThemeSwitcher";
import UserInfo from "./UserInfo";

const Avatar = () => {
  return (
    <div className="aspect-square w-10 overflow-hidden">
      <img
        src="/avatar.png"
        alt="Avatar"
        className="avatar-mask h-full w-full object-cover"
      />
    </div>
  );
};

const Header = () => {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between">
        <Avatar />
        <NavigationBar />
        <div className="flex items-center gap-3">
          <UserInfo />
          <ThemeSwitcher />
        </div>
      </div>
    </Container>
  );
};

export default Header;

export { Avatar };
