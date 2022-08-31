import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404</Heading>
      <Text>Kamu gak tersesat kok Cuma salah alamat aja. Yuk balik lagi!</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Balik Lagi ⤶ </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound