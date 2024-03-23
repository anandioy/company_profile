import { Box, Text, Divider, Center, Flex, Avatar } from "@chakra-ui/react";
import Image from "next/image"
import logoImg from "../assets/tanam2.webp";
import sarahImg from "../assets/sarahwidjaja.jpeg";
import axelImg from "../assets/axelbudiman.jpeg";
import agungImg from "../assets/agungpermana.jpeg";
import bryanImg from "../assets/bryanbennett.jpeg";
import jessImg from "../assets/jesselynsutanto.jpeg";
import maxImg from "../assets/maxwibawa.jpeg";

export default function Teams() {
 
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
                >Our Team
                </Text>
                
            </Box>

        </div>

        <Divider />

        <Center>
        <Flex mt={0} 
             ml={150} 
             mr={150} 
             w='1200px'
             alignItems="flex-start"
             justifyContent="space-between"
             flexWrap="wrap">
            
            <Box mt={5} mr={0} flex="2 1 230px" >
                
                <Center>
                    <Text 
                        as="b"
                        textAlign={"center"}>
                        Sarah Widjaja, Chief Executive Officer (CEO)
                    </Text>
                </Center>
             
                <Avatar mt={3}
                src={sarahImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
               
            </Box>

             <Box mt={5} mr={0} ml={7} flex="1 1 230px">
                <Center>
                    <Text textAlign={"center"} 
                        as="b"
                        whiteSpace="pre-line">
                        Axel Budiman, Chief Technology Officer (CTO)
                    </Text>
                    
                </Center>
                
                <Avatar 
                mt={3}
                src={axelImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
             </Box>

             <Box mt={5} mr={0} ml={7} flex="1 1 200px">
                <Center>
                    <Text textAlign={"center"} 
                        as="b">
                        Agung Permana, Chief Operating Officer (COO)
                    </Text>
                </Center>
                
                <Avatar 
                mt={3}
                src={agungImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
             </Box>
              
             <Box mt={5} mr={0} ml={7} flex="1 1 200px">
                <Center>
                    <Text textAlign={"center"} 
                        as="b">
                        Bryan Bennett, Chief Financial Officer (CFO)
                    </Text>
                </Center>
                
                <Avatar
                src={bryanImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
             </Box>
             </Flex>
        </Center>

        <Center>
            <Flex mt={0} 
             ml={130} 
             mr={150} 
             mb={20}
             w='1200px'
             alignItems="flex-start"
             justifyContent="space-between"
             flexWrap="wrap">
            
                <Box mt={7} mr={0} ml={40} flex="1 1 200px" > 
                
                <Center>
                    <Text 
                        as="b"
                        textAlign={"center"}>
                        Jesselyn Sutanto, Chief Marketing Officer (CMO)
                    </Text>
                </Center>
             
                <Avatar mt={3} ml={130}
                src={jessImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
               
            </Box>

             <Box mt={7} mr={20} ml={0} >
                <Center>
                    <Text textAlign={"center"} 
                        as="b"
                       >
                        Max Wibawa, Chief Compliance Officer (CCO)
                    </Text>
                    
                </Center>
                
                <Avatar 
                mt={3}
                ml={10}
                src={maxImg.src ?? ''} 
               
                width={250}
                height={350}
                size="xl"
                />
             </Box>

             </Flex>
        </Center>

        <Divider/>

        
        <Center>
            <Box 
                mt={5}
                ml={10}
                mr={20}
                mb={3}
            >
            <Text 
            color='#c3c4c3'
            fontFamily={'Georgia'}
            >
                PT Tanam Tumbuh Sejahtera (“Tanam”) berlaku sebagai Agen Penjual Efek Reksa Dana (APERD) yang berizin 
                dan diawasi oleh Otoritas Jasa Keuangan.</Text>
                
            <Text 
                mt={3}
                color='#c3c4c3'
                fontFamily={'Georgia'}
                textAlign="justify"
            >
                Semua Investasi mengandung risiko dan kemungkinan kerugian nilai investasi. 
                Kinerja pada masa lalu tidak mencerminkan kinerja di masa depan. Kinerja historikal, 
                expected return dan proyeksi probabilitas disediakan untuk tujuan informasi dan illustrasi.
                Reksa dana merupakan produk pasar modal dan bukan produk APERD. APERD tidak bertanggung jawab atas 
                risiko pengelolaan portofolio yang dilakukan oleh Manajer Investasi.
            </Text>
            </Box>
        </Center>
       </>
    )
}