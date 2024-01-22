import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, History, ShieldCheck, UploadCloud } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    Name: 'Secure Uploads',
    Icon: ShieldCheck,
    Description:
      'Get your youtube videos edited and uploaded to the channel without givings rights to anyone.'

  },
  {
    Name: 'Cloud Uploading',
    Icon: UploadCloud,
    Description:
      'Automatically upload videos on one click without any bandwidth requirement.'

  },
  {
    Name: 'Version Control',
    Icon: History,
    Description:
      'Get access to all stages of your project with our version control option.'

  }
]
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 flex flex-col items-center text-center mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold  tracking-tight">Your platform to manage{` `}
            <span className="text-red-500">
              Youtube uploads.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-prose">
            Welcome to HandL. We focus on providing you the secure and easily accesible
            platform to manage your Youtube uploads and easy communication with your Editors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link href="/dashboard"
              className={buttonVariants()}>
              Go to Dashboard
            </Link>
            <Button variant='ghost'>
              Create a Handl &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.Name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full text-red-500 bg-red-100">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium">{perk.Name}</h3>
                  <p className="mt-3 text-sm text-gray-700">
                    {perk.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
