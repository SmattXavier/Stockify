import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/navitems";
import Userdropdown from "@/components/ui/userdropdown";

const  Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="Stockify logo" width={140} height={32} className="h-8 w-auto cursor-pointer "/>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems></NavItems>
                </nav>
                <Userdropdown />
            </div>
        </header>
    )
}
export default Header;