import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layout/article'
import thumbABC from '../public/images/works/ABC.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay ={0.3}>
                    <WorkGridItem id="abc" title="Game edukasi" thumbnail={thumbABC}>
                    Kids Education Application that helps children to learn to recognize basic letters and numbers in a fun way
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works