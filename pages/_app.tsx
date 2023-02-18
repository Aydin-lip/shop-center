import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@/mui/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
}
