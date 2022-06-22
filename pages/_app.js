import { CreateEventProvider } from '../context/CreateEventContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
  <CreateEventProvider>
    <Component {...pageProps} />
  </CreateEventProvider>
  )
}

export default MyApp
