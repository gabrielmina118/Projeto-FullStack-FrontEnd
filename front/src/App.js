import theme from './constants/theme';
import Router from './Routes/Router';
import { ThemeProvider } from '@material-ui/core/styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}


