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
                >Our Team
                </Text>
            </Box>

        </div>

        <Divider />

        <Center>
        <Flex mt={5} 
                    mx={[4, 0]} 
                    w={['100%', '90%', '80%', '75%']}
                    alignItems="flex-start"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    mb={3}
                    >
              
            
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
              
             <Box mt={5} mr={0} ml={5} flex="1 1 230px" textAlign={"center"} >
                <Center>
                    <Text 
                        as="b">
                        Bryan Bennett, Chief Financial Officer (CFO)
                    </Text>
                </Center>
                
                <Avatar
                src={bryanImg.src ?? ''} 
                mt={3}
                ml={0}
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