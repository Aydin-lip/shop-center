import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@/mui/theme';
import { ThemeProvider } from '@mui/material';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </div>
}
