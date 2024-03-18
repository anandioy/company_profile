import Image from "next/image";
import logoImg from "../assets/tanam2.webp";
import { Divider, Text } from '@chakra-ui/react';

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
                     marginLeft: "20px",
                     marginTop: "10px",
                     marginBottom: "10px"
            }}
            />
            <Text fontSize='4xl' 
              as='b'
              fontFamily='Helvetica'>
                Tanam</Text>
        </div>

        <Divider />


        </>
    )
}