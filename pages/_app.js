import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import Fonts from '../components/font'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router} ) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website