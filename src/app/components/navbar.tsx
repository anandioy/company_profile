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
      right={2}
      p={4}
      color="black"
      alignItems="center"
      justifyContent="flex-end"
      width="27%"
      zIndex={999}
      bg="rgba(255, 255, 255, 0.8)"
      style={{ paddingTop: '50px' }}
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
            href="#sectionProducts" 
            style={{ marginRight: '10px',
            textDecoration: activeLink === 'sectionProducts' ? 'underline' : 'none',
            }}
            onMouseOver={() => setActiveLink('sectionProducts')}
            onMouseOut={() => setActiveLink('')}
            >Invest</a>
            
            <a onClick={handleScroll} 
            href="#sectionTeams" 
            style={{ marginRight: '10px',
            textDecoration: activeLink === 'sectionTeams' ? 'underline' : 'none',
            }}
            onMouseOver={() => setActiveLink('sectionTeams')}
            onMouseOut={() => setActiveLink('')}
            >Our Team</a>
        </nav>
    </Flex>
  );
  }