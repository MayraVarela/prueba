import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RatingProvider } from '../context/RatingContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RatingProvider>
      <Component {...pageProps} />
    </RatingProvider>
  );
}
  
  export default MyApp