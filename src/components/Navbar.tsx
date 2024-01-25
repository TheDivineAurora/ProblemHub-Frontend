"use client"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"
import { buttonVariants } from "./ui/button"
import UserProfile from "./UserProfile"
import MobileNav from "./MobileNav"
import { useSession } from "next-auth/react"


const Navbar = () => {
    const {data:session} = useSession();
    const user = session?.user;
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex  h-16 items-center">

                            <MobileNav />
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Image src="/Vector.svg"
                                        width={45}
                                        height={45}
                                        alt="Handl" />
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-10 lg:block lg:self-stretch">
                                <div className="flex gap-4 h-full">
                                    <div className="relative gap-x-6 flex items-center">
                                        <Link
                                            href="/"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Home
                                        </Link>
                                        <Link
                                            href="/dashboard"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/videos"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Videos
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-auto flex items-center" >
                                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                                    {user ?  <UserProfile />  : (
                                        <>
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Sign In
                                        </Link>
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                         <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}>
                                            Create Account
                                        </Link>
                                        <span
                                            className='h-6 w-px bg-gray-200'
                                            aria-hidden='true'
                                        />
                                        </>                                       
                                    )}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar