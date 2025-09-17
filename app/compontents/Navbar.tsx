import Link from "next/link";


const Navbar = () => {
    return (
       <nav className="shadow py-3">
         <div className="flex items-center justify-between max-w-7xl mx-auto ">
            <div>
                <Link className="text-xl font-bold" href='/'>Task</Link>
            </div>
            <div className="flex items-center justify-center gap-6">
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/users'>Users</Link>
                <Link href='/contact'>Contact</Link>
            </div>
            <div>
                <button className="bg-black px-4 py-2 text-base text-white rounded-md">Sign Up</button>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;