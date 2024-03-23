import { Box, Text, Divider, Center, Flex } from "@chakra-ui/react";
import Image from "next/image"
import logoImg from "../assets/tanam2.webp";
import phoneicon from "../assets/phoneicon.png";
import arrowicon from "../assets/arrowdown.png"

export default function Products() {

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
             w='500px' 
             p={4} 
             color='black'
             rounded='md'
             style={{ paddingTop: '50px' }}
             >
             
                <Text 
                    fontSize='4xl' 
                    as='b'
                    fontFamily='Georgia'
                >Investment Products
                </Text>
                
            </Box>

        </div>

        <Divider />
    
        <Center>
          <Box mt={5}>
           <Center>              
          <Text>You are just a <b>Click</b> away from being able to invest in these products:</Text>
          </Center> 

          <Center>
            <Image 
        
                src={phoneicon} 
                alt='/' 
                width={100}
                height={100}
                style={{ marginRight: "20px",
                         marginLeft: "20px",
                         marginTop: "20px",
                         marginBottom: "10px",
                }}
            />
            </Center>

            <Center>
            <Image 
        
              src={arrowicon} 
              alt='/' 
              width={100}
              height={100}
              style={{ marginRight: "20px",
                       marginLeft: "20px",
                       marginTop: "5px",
                       marginBottom: "10px",
                  }}
            />
            </Center>
            </Box>
        
        </Center>

        <Center>
        <Flex mt={0} 
             ml={150} 
             mr={150} 
             w='1200px'
             alignItems="flex-start"
             justifyContent="space-between"
             flexWrap="wrap"
             height='50px'
             >
            
            <Box mt={5} mr={3} flex="2 1 240px" >
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    textAlign="center"
                    color='#028a0f'
                    >Stocks
                </Text>
                    
                <Text textAlign="justify">
                With <b>Tanam</b>, you can buy the stocks of Indonesian publicly traded companies listed on the Indonesia Stock Exchange (IDX)
                </Text>
            </Box>

        <Divider orientation='vertical' color='black' h='300px' />
        
             <Box mt={5} mr={3} ml={3} flex="1 1 250px">
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    textAlign="center"
                    color='#028a0f'
                    >Mutual Funds
                </Text>
                
                <Text textAlign="justify">
                <b>Tanam </b>allows you to invest in mutual funds, also known as &quot;Reksa Dana,&quot; which are investment vehicles that pool money from various investors to invest 
                in a diversified portfolio of securities such as stocks, bonds, money market instruments, or a combination of these assets.
                </Text>
             </Box>

             <Divider orientation='vertical' color='black' h='300px' />
             <Box mt={5} mr={3} ml={3} flex="1 1 250px">
                <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    textAlign="center"
                    color='#028a0f'
                    >Stable Earn
                </Text>
                
                <Text textAlign="justify">
                  <b>Tanam</b> offers a short-term investment option characterized by a reliably stable return. Backed by assets 
                  like short-term government bonds that carry a 100% state guarantee, this product is ideal for 
                  individuals seeking lower risk exposure
                </Text>
             </Box>
              
             <Divider orientation='vertical' color='black' h='300px' />
             <Box mt={5} mr={0} ml={3} flex="1 1 250px">
             <Text 
                    fontWeight="bold" 
                    textDecoration="underline"
                    fontSize='2xl'
                    textAlign="center"
                    color='#028a0f'
                    >Government Bonds
                </Text>
              
              <Text textAlign="justify">
              Government Securities (SBN) are securities issued by the government to finance the state budget. 
              Through SBN investment, we lend money to the government and in return we will get profits in the 
              form of coupons (bond interest).
              </Text>
             </Box>
             
             </Flex>
        </Center>
       </>
    )
}