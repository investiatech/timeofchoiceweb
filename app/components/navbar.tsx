import { Button } from "@/components/ui/button";
import Link from "next/link"
import Image from 'next/image'
import Logo from '/assets/logo.png'

export default function Navbar() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://investia.store/czaswyborow" className="flex items-center">
                        <Image className="mr-2"
                            src={Logo}
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                        {/* <span className="hidden md:flex self-center text-xl font-semibold whitespace-nowrap">Time Of Choice</span> */}
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Link href="/login"><Button variant="secondary" className="mr-2">Log In</Button></Link>
                        <Link href="#price"><Button >Zamów Już Teraz</Button></Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Start</Link>
                            </li>
                            <li>
                                <Link href="#features" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Gra</Link>
                            </li>
                            <li>
                                <Link href="#price" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Przedsprzedaż</Link>
                            </li>
                            <li>
                                <Link href="#faq" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">FAQ</Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Opinie</Link>
                            </li>
                            <li>
                                <Link href="#about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Forum</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};