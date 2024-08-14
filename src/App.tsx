import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { Router } from "./router/router";
import Auth from "./service/auth";

interface AppProps {
  auth: Auth;
}
const App = ({ auth }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router auth={auth} />
    </ThemeProvider>
  );
};

export default App;
