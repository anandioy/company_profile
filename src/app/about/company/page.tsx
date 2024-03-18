"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Text, Divider} from '@chakra-ui/react'


export default function CompanyAbout () {
    const router = useRouter();
    return (
        
        <>
        <Box bg='#48BB78' 
             ml={50}
             mb={3} 
             w='15%' 
             p={4} 
             color='white'
             rounded='md'>
             
            <Text fontSize='4xl' 
              as='b'
              fontFamily='Helvetica'
              >About Us
            </Text>
        </Box>
        <Divider />
       
        <Box mt={10} 
             ml={50} 
             mr={500} 
             maxWidth='800px'>
        <p>At Tanam, we believe in cultivating financial growth through digital mutual funds, empowering individuals to sow the seeds of prosperity for their future. With a name derived from the Indonesian word for "to plant," our mission is deeply rooted in nurturing financial well-being and fostering a community of investors who aspire to thrive.</p>
       </Box>
       </>
    )
}