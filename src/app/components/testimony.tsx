import Image from "next/image";
import firstImg from "../assets/pp1.jpeg"
import secondImg from "../assets/pp2.jpeg"
import thirdImg from "../assets/pp3.jpeg"
import { Avatar, Center, Box, Text } from "@chakra-ui/react"

export default function Testimony() {


    return (
        <>
         <Center>
            <div style={{ 
                display: "flex", 
                alignItems: "center",
                marginTop: "10px"
                }}>
            
            <Box
            width={270}
            height={270}
            textAlign="justify"
            fontFamily='Helvetica'
            >
            <Avatar src={firstImg.src ?? ''} 
                
                size="xl"
                style={{ marginRight: "20px",
                         marginLeft: "80px"
            }} />
            <Text fontSize="sm"
                  mr={4}
                  ml={4}
                  mt={2}
                ><b>Grace Kelly, 36 :</b> &quot; I&apos;ve been investing with Tanam for over two years now, and the returns have been nothing short of phenomenal. &quot;</Text>
            </Box>

            <Box
            width={270}
            height={270}
            textAlign="justify"
            fontFamily='Helvetica'
            >
            <Avatar src={secondImg.src ?? ''} 
                
                size="xl"
                style={{ marginRight: "20px",
                         marginLeft: "80px"
            }} />
            <Text fontSize="sm"
                mr={4}
                ml={4}
                mt={2}
            ><b>Thomas Ford, 40 :</b> &quot; Navigating the complexities of the investment world can be daunting, but thanks to Tanam, it&apos;s become a seamless journey. &quot;</Text>
            </Box>

            <Box
            width={270}
            height={270}
            textAlign="justify"
            fontFamily='Helvetica'
            >
            <Avatar src={thirdImg.src ?? ''} 
                
                size="xl"
                style={{ marginRight: "20px",
                         marginLeft: "80px"
            }} />
            <Text fontSize="sm"
                  mr={4}
                  ml={4}
                  mt={2}
                ><b>Minka Jones, 25 :</b> &quot; It&apos;s not just about the numbers though; their intuitive interface and personalized insights make managing my portfolio a breeze.&quot;</Text>
            </Box>
                
            </div>

            </Center>
        </>

    )
}