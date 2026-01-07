import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

const OuterContainer = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={cn("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const InnerContainer = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={cn("px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

const ContainerComponent = ({ children, ...props }: ContainerProps) => {
  return (
    <OuterContainer {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
};

export const Container = Object.assign(ContainerComponent, {
  Outer: OuterContainer,
  Inner: InnerContainer,
});
