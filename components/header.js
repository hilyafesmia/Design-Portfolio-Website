import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const headerMenu = document.querySelector(".header-menu");    
        const headerBg = document.querySelector(".header-background");    
        const link = document.querySelectorAll(".header-menu a");
        const bar = document.querySelectorAll(".bar");

        hamburger.addEventListener("click", openMenu);
        link.forEach(n => n.addEventListener("click", () => {
            closeMenu();
            console.log("click link");
        }));

        function closeMenu() {
            headerMenu.classList.remove("active");
            headerBg.classList.remove("active");
            bar.forEach(n => n.classList.remove("active"));
            console.log("menu closed")
        }

        function openMenu() {
            headerMenu.classList.toggle("active");
            headerBg.classList.toggle("active");
            bar.forEach(n => n.classList.toggle("active"));
            console.log("menu opened")
        }
    }, [])

    return (
        <nav className="header-background">
            <div className="header-outer">
                <Link href='/'>
                    <h3>Hilya Auli Fesmia</h3>
                </Link>
                <div className="header-menu">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/works'>Works</Link>
                    <Link href='/hobbies'>Hobbies</Link>
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )            
}