import { QueryProvider } from "../QueryProvider";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default layout;
