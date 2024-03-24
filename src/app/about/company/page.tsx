"use client";
import Link from "next/link";
import { Box, Text, Divider, Flex} from '@chakra-ui/react'
import Image from "next/image"
import homeofficeImg from "../../assets/homeoffice.jpeg"
import logoImg from "../../assets/tanam2.webp";


export default function CompanyAbout () {

    return (
        <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image 
                src={logoImg} 
                alt='/' 
                width={100}
                height={100}
                style={{ 
                        marginRight: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                        }}
            />

            <Box 
             height="50%"
             w={['90%', '300px']}
             mb={6}  
             p={4} 
             color='black'
             rounded='md'
             textAlign="center"
             style={{ paddingTop: '50px' }}
             >
             
                <Text 
                    fontSize={['3xl', '4xl']}
                    as='b'
                    fontFamily='Georgia'
                >About Us
                </Text>
            </Box>

        </div>

        <Divider />
       
        <Flex 
             direction={['column', 'row']}
             mt={20} 
             justifyContent="center"
             alignItems="flex-start"
             flexWrap="wrap"
             >
            
            <Box mt={0} mr={3} mb={6} flex={['none', 2]} >
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize={['xl', '2xl']}
                    color='#028a0f'
                    >The Birth of Tanam
                </Text>
                    
                <Text textAlign="justify">
                    In the bustling city of Jakarta, amidst the flurry of innovation and entrepreneurial spirit,  
                    <b> Tanam</b> was born. Founded in 2019 by a group of ambitious young finance graduates and tech enthusiasts, 
                    <b> Tanam</b> emerged as a visionary project aiming to revolutionize the way people interacted with investments.
                </Text>
            </Box>

            <Divider orientation='vertical' color='black' h={['1px', '300px']} />

             <Box mt={0} mr={3} mb={6} flex={['none', 2]}>
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize={['xl', '2xl']}
                    color='#028a0f'
                    >The Visionaries
                </Text>
                
                <Text textAlign="justify">
                    At the helm of <b>Tanam</b> stood its visionary co-founders: <b>Sarah Widjaja</b>, a brilliant 
                    algorithmic trader with a knack for predicting market trends; <b>Axel Budiman</b>, a seasoned software 
                    engineer with a passion for building scalable platforms; and <b>Agung Permana</b>, a charismatic business 
                    strategist with a keen eye for disruptive opportunities.
                </Text>
             </Box>

             <Divider orientation='vertical' color='black' h={['1px', '300px']} />

             <Box mt={0} mr={3} mb={6} flex={['none', 2]}>
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize={['xl', '2xl']}
                    color='#028a0f'
                    >The Early Days
                </Text>

                <Text textAlign="justify">
                    In its infancy, <b>Tanam</b> operated out of a small room-turned-office, fueled by sheer determination 
                    and a shared vision. Sarah, Axel, and Agung worked tirelessly, burning the midnight oil to develop 
                    the core algorithms and infrastructure that would power <b>Tanam&apos;s</b> groundbreaking platform.
                </Text>
             </Box>
             <Divider orientation='vertical' color='black' h='300px' />
       
             <Box ml={3} mr={-3} flex={['none', 2]}>
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