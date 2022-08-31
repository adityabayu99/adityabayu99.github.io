import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in Jakarta, Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Aditya Bayu Irawan
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Bayu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Aditya Bayu Irawan Or Often Called Bayu, I Am A Full Stack Developer Based In Indonesia With A Desire
        To Build Services Or Digital Goods That I Want.  I Have a Talent For Everything Launching Products, 
        From Planning And Designing To Solving Real-Life Problems With Code. When Not Online, I Like To 
        Hang Out With The Gadgets. Here are some skills I have.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
            <BioYear>1999</BioYear>
            Born in Jakarta, Indonesia
            </BioSection>
        <BioSection>
            <BioYear>Oct 2019 - Dec 2019</BioYear>
                    Internship Organization And Development Department At Samudera 
                    Daya Mitra (Samudera Indonesia), Jakarta
            </BioSection>
        <BioSection>
            <BioYear>Apr 2021 - Jun 2021</BioYear>
                     Internship Human Capital Department At Samudera Energi Tangguh 
                    (Samudera Indonesia), Jakarta
            </BioSection>
        <BioSection>
            <BioYear>2022</BioYear>
                    Completed Bachelor's Degree in Informatics Engineering at Muhammadiyah Jakarta College of Informatics and Computer Management
                </BioSection> 
        <BioSection>
            <BioYear>2022 To Present</BioYear>
                    Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ❤
        </Heading>
        <Paragraph>
            Art , {''} <Link href="https://open.spotify.com/?_gl=1*psmx79*_gcl_aw*R0NMLjE2NjAxMjcxMTIuQ2owS0NRandyczJYQmhEakFSSXNBSFZ5bW1SVGNmN1JFcDBJT0gxRTYteXJ1WG9SSlhhbHpJS3JlbEZVejRsX0VJOFdiUFZLaG9UQkUxRWFBbXlnRUFMd193Y0I.*_gcl_dc*R0NMLjE2NjAxMjcxMTIuQ2owS0NRandyczJYQmhEakFSSXNBSFZ5bW1SVGNmN1JFcDBJT0gxRTYteXJ1WG9SSlhhbHpJS3JlbEZVejRsX0VJOFdiUFZLaG9UQkUxRWFBbXlnRUFMd193Y0I." target="_blank">
            Music , {''}
            </Link>
            Fishing , Coding , {''}
            <Link href="https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies&hl=id-ID&utm_source=apac_med&utm_medium=hasem&utm_content=Jul0722&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-id-1003227-med-hasem-gm-Evergreen-Jul0722-Text_Search_SKWS-SKWS%7cONSEM_kwid_43700072108763762_creativeid_602092460368_device_c&gclid=Cj0KCQjwrs2XBhDjARIsAHVymmQGdGwrBEgeAdAiDmGqjfF-Bom1DyTsw_9HI05zBAUNBXqqb1LrPHwaAr5dEALw_wcB&gclsrc=aw.ds" target="_blank">
            Playing Game , {''}
            </Link>
            Machine Learning . {''}
    </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/adityabayu99" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @adityabayu99
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/bayu.panglimacartoe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Aditya Bayu Irawan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/bayuoutlook" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bayuoutlook
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/adityabayu_99/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @adityabayu_99
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'