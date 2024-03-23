import Image from "next/image";
import logoImg from "../assets/tanam2.webp";
import { Divider, Text, Center, Box, Container, Flex } from '@chakra-ui/react';
import womanImg from "../assets/businesswoman.png"
import styles from "../page.module.css"
import Testimony from "../components/testimony";
import googleicon from "../assets/google.png";
import appstoreicon from "../assets/appstore.png";

export default function Homepage() {


    return (
        <>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Image 
            src={logoImg} 
            alt='/' 
            width={100}
            height={100}
            style={{ marginRight: "20px",
                     marginLeft: "200px",
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
        </div>

        <Divider />

        <Center>
            <Box>
                <Text 
                    mt = {0}
                    fontSize='5xl'
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
                style={{ marginRight: "20px",
                         marginLeft: "10px",
                         marginTop: "30px",
                         marginBottom: "10px",
                }}
                className={styles.image}
            />
                
                <Box mt={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Text fontSize='2xl'>Our Investment Products</Text>
                
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

          <Flex> 
            <Box 
                ml={40}
                mt={2}
                >

                <Text fontSize='2xl'>Testimonials</Text>

                <Testimony />
                
            </Box>

            <Box ml={-40} mt={10}>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image 
            src={googleicon} 
            alt='/' 
            width={200}
            height={200}
            style={{ marginRight: "20px",
                     marginLeft: "200px",
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
                     marginLeft: "210px",
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