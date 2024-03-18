'use client'

import { Flex, Spacer, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navbar() {

    const [activeLink, setActiveLink] = useState('')

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });

        setActiveLink(targetId);
    };

  return (
    <Flex
      position="fixed"
      top={0}
      right={0}
      p={4}
      color="black"
      alignItems="center"
      justifyContent="flex-end"
      width="100%"
      zIndex={999}
    >
        <nav>
            <a onClick={handleScroll} 
            href="#sectionHome" 
            style={{ 
              marginRight: '10px', 
              textDecoration: activeLink === 'sectionHome' ? 'underline' : 'none',
              }}
              onMouseOver={() => setActiveLink('sectionHome')}
              onMouseOut={() => setActiveLink('')}
              >Home</a>
            
            <a onClick={handleScroll} 
            href="#sectionAbout" 
            style={{ marginRight: '10px',
            textDecoration: activeLink === 'sectionAbout' ? 'underline' : 'none',
            }}
            onMouseOver={() => setActiveLink('sectionAbout')}
            onMouseOut={() => setActiveLink('')}
            >About Us</a>
            
            <a onClick={handleScroll} 
            href="#sectionServices" 
            style={{ marginRight: '10px',
            textDecoration: activeLink === 'sectionServices' ? 'underline' : 'none',
            }}
            onMouseOver={() => setActiveLink('sectionServices')}
            onMouseOut={() => setActiveLink('')}
            >Services</a>
            
            <a onClick={handleScroll} 
            href="#sectionContact" 
            style={{ marginRight: '10px',
            textDecoration: activeLink === 'sectionContact' ? 'underline' : 'none',
            }}
            onMouseOver={() => setActiveLink('sectionContact')}
            onMouseOut={() => setActiveLink('')}
            >Contact Us</a>
        </nav>
    </Flex>
  );
  }