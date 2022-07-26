import Link from 'next/link';

export default function Header() {
    return (
        <div class="header-background">
            <div class="header-outer">
                <Link href='/'>
                    <h3>Hilya Auli Fesmia</h3>
                </Link>
                <div class="header-menu">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/works'>Works</Link>
                    <Link href='/hobbies'>Hobbies</Link>
                </div>
            </div>
        </div>
    )            
}