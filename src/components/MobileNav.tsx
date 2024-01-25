
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"


const MobileNav = () => {
    const { data: session } = useSession();
    const user = session?.user;
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className=" lg:hidden mx-2" />
            </SheetTrigger>
            <SheetContent className="w-full h-full sm:w-[540px] flex flex-col justify-between">
                <section className="flex flex-col items-start text-center">
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
                </section>

                <section className="flex flex-row mx-auto items-center gap-5">
                    {user ? <> <Link
                        href="/sign-up"
                        className={buttonVariants({
                            variant: 'default', size: 'sm'

                        })}>
                        Create Account
                    </Link>
                        <Link
                            href="/sign-in"
                            className={buttonVariants({
                                variant: 'ghost',
                            })}>
                            Log In
                        </Link> </> :
                         null}

                </section>



            </SheetContent>
        </Sheet>
    )

}

export default MobileNav