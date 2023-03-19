import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@/mui/theme';
import { ThemeProvider } from '@mui/material';
import Context from '@/context/state';
import Loading from '@/components/loading';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <ThemeProvider theme={theme}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </ThemeProvider>
  </div>
}
