import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbABC from '../public/images/works/ABC.png'

const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Game Edukasi Pengenalan Huruf Dan Angka Pada Anak – Anak Berbasis Android"
              thumbnail={thumbABC}
              href="/works/abc"
            />
         </SimpleGrid>
         </Section>
         </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'