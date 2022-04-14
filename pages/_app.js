import { Toolbar } from '../components/toolbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toolbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
