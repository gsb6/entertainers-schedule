import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;

      success: string;
      error: string;

      background: string;
      text: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
