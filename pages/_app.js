import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/navBar';


function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
        <div>
            <NavBar />
            <Component {...pageProps} />
        </div>
        </ChakraProvider>
    )
}

export default MyApp

