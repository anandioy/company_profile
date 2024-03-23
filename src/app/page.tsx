import Navbar from "./components/navbar"
import Homepage from "./home/page"
import CompanyAbout from "./about/company/page"
import Products from "./products/page"
import Teams from "./teams/page"
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {

  return (
    <ChakraProvider>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <main>
      <div>
          <section className="full-height" id="sectionHome"> 
            <div><Homepage /></div>
          </section>
        
          <div>
            <Navbar />
          </div>
      </div>
      
      <div>
          <section className="full-height" id="sectionAbout">
            <CompanyAbout />
          </section>

      </div>

      <div>
          <section className="full-height" id="sectionProducts">
            <Products />
          </section>

      </div>

      <div>
          <section className="full-height" id="sectionTeams">
            <Teams />
          </section>

      </div>
    </main>
    </ChakraProvider>
  );
  
}