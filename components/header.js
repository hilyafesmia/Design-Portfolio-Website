import Link from 'next/link';

export default function Header() {

    if (typeof window === 'object') {
        const hamburger = document.querySelector(".hamburger");
        const headerMenu = document.querySelector(".header-menu");    
        const headerBg = document.querySelector(".header-background");    
        const bar = document.querySelector(".bar");    

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            headerMenu.classList.toggle("active");
            headerBg.classList.toggle("active");
            bar.classList.toggle("active");
        }
    }

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