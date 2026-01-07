import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "next-themes";

const ThemeProvider = (props: ThemeProviderProps) => {
  return <NextThemeProvider {...props} />;
};

export default ThemeProvider;
