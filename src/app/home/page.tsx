import Image from "next/image";
import logoImg from "../assets/tanam2.webp";
import { Divider, Text, Center, Box, Container, Flex } from '@chakra-ui/react';
import womanImg from "../assets/businesswoman.png"
import styles from "../page.module.css"
import Testimony from "../components/testimony";
import googleicon from "../assets/google.png";
import appstoreicon from "../assets/appstore.png";
import { useBreakpointValue } from '@chakra-ui/react';

export default function Homepage() {


    return (
        <>
        <Flex style={{ display: "flex", alignItems: "center" }}
              ml={{ base: '50px', md: '100px', lg: '150px' }}
        >
            <Image 
            src={logoImg} 
            alt='/' 
            width={100}
            height={100}
            style={{ marginRight: "20px",
                     marginTop: "10px",
                     marginBottom: "10px"
            }}
            />
            <Text 
                fontSize='4xl' 
                as='b'
                fontFamily='Helvetica'>
                Tanam</Text>

            <Text
                fontSize='l'
                as='i'
                ml={3}
                mt={2}
            >
                Cultivating Growth, Nurturing Futures
            </Text>
        </Flex>

        <Divider />

        <Center flexDirection={{ base: 'column', md: 'row' }}>
            <Box textAlign={{ base: 'center', md: 'left' }} mt={{ base: '4', md: '0' }}>
                <Text 
                    mt = {0}
                    fontSize={{ base: '3xl', md: '5xl' }}
                    maxWidth='400px'
                    className={styles.fadeIn}
                    >
                    Let us help you plan for tomorrow
                </Text>
                <Text
                    maxWidth='400px'
                    fontFamily='Helvetica'
                >
                Our vision is to revolutionize the way people invest, making wealth creation accessible to all, regardless of background or expertise. 
                </Text>
            </Box>
            
            <Box className={`${styles.fadeIn} ${styles.imageContainer}`} style={{display: "flex"}}>
            <Image 
                src={womanImg} 
                alt='/' 
                width={200}
                height={200}
                style={{ margin: "10px" }}
                className={styles.image}
            />
                
                <Box mt={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Our Investment Products</Text>
                
                    <Box mt={0}>
                        <Container mt={2} ml={6} width={100} rounded='md' bg='green.600' color='white'  fontFamily='Helvetica'>Stocks</Container>
                        <Container mt={2} ml={2} width={130} rounded='md' bg='green.600' color='white'  fontFamily='Helvetica'>Mutual Fund</Container>
                    
                        <Container mt={2} ml={2} width={130} rounded='md' bg='green.600' color='white'  fontFamily='Helvetica'>Stable Earn</Container>
                        <Container mt={2} ml={-1} width={150} rounded='md' bg='green.600' color='white' fontFamily='Helvetica'>Government Bonds</Container>
                    </Box>
                </Box>
            </Box>
        </Center>
        <Divider />

          <Flex flexDirection={{ base: 'column', md: 'row' }}> 
            <Box 
                textAlign="center" mt={10} ml={{ base: '0', md: '10' }}
                >

                <Text 
                    mt={-4}
                    ml={7}
                    fontSize={{ base: 'xl', md: '2xl' }}>Testimonials</Text>

                <Testimony />
                
            </Box>

            <Box textAlign="center" mt={10}>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image 
            src={googleicon} 
            alt='/' 
            width={200}
            height={200}
            style={{ marginLeft: "-7px",
                     marginRight: "200px",
                     marginTop: "10px",
                     marginBottom: "10px"
            }}
            />
            </a>

            <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer">
            <Image 
            src={appstoreicon} 
            alt='/' 
            width={180}
            height={200}
            style={{ 
                     
                     marginTop: "10px",
                     marginBottom: "10px"
            }}
            />
            </a>
            </Box>
         </Flex> 

        </>
    )
}