import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layout/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Game edukasi">
      <Container>
        <Title>
        Game Edukasi Pengenalan Huruf Dan Angka Pada Anak – Anak Berbasis Android <Badge>2020-2021</Badge>
        </Title>
        <P>
        Kids Education Application that helps children to learn to recognize basic letters and numbers in a fun way.
        This application was made to complete my thesis. Thanks for those who try to download and review my app
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Download link</Meta>
            <Link href="https://drive.google.com/file/d/1QzN-oAZFDFpoaNlViSRAkpi_tqRshX79/view">
              Game edukasi pengenalan huruf dan angka{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C#, UnityScript (In the form of JavaScript ), BooScript that can be integrated with the Python language</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>App Screenshot</Center>
        </Heading>
          <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/1.png" alt="Game edukasi" />
          <WorkImage src="/images/works/ABC.png" alt="Game edukasi" />
        </SimpleGrid>
        <WorkImage src="/images/works/5.png" alt="Game edukasi" />
        <WorkImage src="/images/works/7.png" alt="Game edukasi" />
        <WorkImage src="/images/works/8.png" alt="Game edukasi" />
        <WorkImage src="/images/works/9.png" alt="Game edukasi" />
        <WorkImage src="/images/works/10.png" alt="Game edukasi" />
        <WorkImage src="/images/works/6.png" alt="Game edukasi" />
        <WorkImage src="/images/works/11.png" alt="Game edukasi" />
        <WorkImage src="/images/works/12.png" alt="Game edukasi" />
        <WorkImage src="/images/works/2.png" alt="Game edukasi" />
        <WorkImage src="/images/works/3.png" alt="Game edukasi" />
        <WorkImage src="/images/works/4.png" alt="Game edukasi" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'