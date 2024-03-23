import { Box, Text, Divider } from "@chakra-ui/react";
import Image from "next/image"
import logoImg from "../assets/tanam2.webp";

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
                    fontFamily='Helvetica'
                >Investment Products
                </Text>
            </Box>

        </div>

        <Divider />
       </>
    )
}