"use client";
import Link from "next/link";
import { Box, Text, Divider, Flex} from '@chakra-ui/react'
import Image from "next/image"
import homeofficeImg from "../../assets/homeoffice.jpeg"
import logoImg from "../../assets/tanam2.webp";


export default function CompanyAbout () {

    return (
        <>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Image 
                src={logoImg} 
                alt='/' 
                width={100}
                height={100}
                style={{ 
                        marginRight: "20px",
                        marginLeft: "200px",
                        marginTop: "10px",
                        marginBottom: "10px"
                        }}
            />

            <Box 
             height="50%"
             ml={-5}
             mb={6} 
             w='300px' 
             p={4} 
             color='black'
             rounded='md'
             style={{ paddingTop: '50px' }}
             >
             
                <Text 
                    fontSize='4xl' 
                    as='b'
                    fontFamily='Helvetica'
                >About Us
                </Text>
            </Box>

        </div>

        <Divider />
       
        <Flex mt={10} 
             ml={220} 
             mr={500} 
             w='1100px'
             alignItems="flex-start">
            
            <Box mt={5} mr={0} ml={-20} flex="2" >
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    >The Birth of Tanam
                </Text>
                    
                <Text textAlign="justify">
                    In the bustling city of Jakarta, amidst the flurry of innovation and entrepreneurial spirit,  
                    <b> Tanam</b> was born. Founded in 2019 by a group of ambitious young finance graduates and tech enthusiasts, 
                    <b> Tanam</b> emerged as a visionary project aiming to revolutionize the way people interacted with investments.
                </Text>
            </Box>

             <Box mt={5} mr={0} ml={7} flex="2">
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    >The Visionaries:
                </Text>
                
                <Text textAlign="justify">
                    At the helm of <b>Tanam</b> stood its visionary co-founders: <b>Sarah Widjaja</b>, a brilliant 
                    algorithmic trader with a knack for predicting market trends; <b>Axel Budiman</b>, a seasoned software 
                    engineer with a passion for building scalable platforms; and <b>Agung Permana</b>, a charismatic business 
                    strategist with a keen eye for disruptive opportunities.
                </Text>
             </Box>

             <Box mt={5} mr={0} ml={7} flex="2">
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    >The Early Days:
                </Text>

                <Text textAlign="justify">
                    In its infancy, <b>Tanam</b> operated out of a small room-turned-office, fueled by sheer determination 
                    and a shared vision. Sarah, Axel, and Agung worked tirelessly, burning the midnight oil to develop 
                    the core algorithms and infrastructure that would power <b>Tanam's</b> groundbreaking platform.
                </Text>
             </Box>
       
             <Box ml={3} mr={-3}>
              <Image 
                src={homeofficeImg} 
                alt='/' 
                width={300}
                height={400}
                
                style={{ marginRight: "20px",
                         marginLeft: "10px",
                         marginTop: "30px",
                         marginBottom: "10px",
                }}
              />
              </Box>
        </Flex>
      
       </>
    )
}