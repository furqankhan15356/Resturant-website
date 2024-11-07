import Link from "next/link"

export default function Navbar(){
    return (
        <header className="pt-6">
            <ul className="flex justify-center gap-7 text-2xl font-bold text-[#b1b1ac]  font-sans">
                <Link href="/"><li>Home</li></Link>
                <Link href="/menu"><li>Menu</li></Link>
                <li><img src="/LOGO.png" alt="image" /></li>
                <Link href="/team"><li>Team</li></Link>
                <Link href="/events"><li>Event</li></Link>
            </ul>
        </header>
    )
}