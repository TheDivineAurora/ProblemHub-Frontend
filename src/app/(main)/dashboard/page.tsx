
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { CreatorSection } from "@/components/CreatorSection";
import { EditorSection } from "@/components/EditorSection";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in/?callbackUrl=/dashboard");
  }

  return (

    <MaxWidthWrapper>
      <Tabs defaultValue="creator" className="w-full flex flex-row">
        <div className="h-screen w-1/4 mr-4">
          <TabsList className="grid grid-cols-1 mt-6">
            <TabsTrigger value="creator" className="justify-start hover:bg-blue-50 text-xl">Creator</TabsTrigger>
            <TabsTrigger value="editor" className="justify-start hover:bg-blue-50 text-xl">Editor</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="creator" className="w-full ">
         <CreatorSection/>
        </TabsContent>
        <TabsContent value="editor" className="w-full" >
         <EditorSection />
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper >
  );
}
