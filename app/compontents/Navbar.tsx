"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="shadow py-3">
            <div className="md:flex items-center justify-between md:max-w-7xl mx-auto flex px-6 ">
                <div>
                    <Link className="text-xl font-bold" href='/'>Task</Link>
                </div>
                <div className="hidden md:flex items-center justify-center gap-6">
                    <Link className={`${pathname === '/' ? 'text-red-500 font-bold' : ''} hover:text-red-500`} href='/'>Home</Link>

                    <Link className={`${pathname === '/posts' ? 'text-red-500 font-bold' : ''} hover:text-red-500`} href='/posts'>Posts</Link>
                    
                    <Link className={`${pathname === '/users' ? 'text-red-500 font-bold' : ''} hover:text-red-500`} href='/users'>Users</Link>

                </div>
                <div>
                    <button className="bg-black px-4 py-2 text-base text-white rounded-md">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;