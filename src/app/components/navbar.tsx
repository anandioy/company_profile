'use client'

export default function Navbar() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        })
    };

  return (
    <header>
        <nav>
            <a onClick={handleScroll} href="#sectionHome">Homepage</a>
            <a onClick={handleScroll} href="#sectionAbout">About Us</a>
            <a onClick={handleScroll} href="#sectionServices">Services</a>
            <a onClick={handleScroll} href="#sectionContact">Contact Us</a>
        </nav>
    </header>
  );
  }