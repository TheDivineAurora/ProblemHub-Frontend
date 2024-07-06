
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Sheet from "@/components/Sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const sheets = [ {name : "cp-31"}, {name : "cp-32"}, {name: "cp-36"}, {name: "beginner-friendly"}, {name : "personal-choice"}]
export default function page() {

  return ( 
    <MaxWidthWrapper>
      <Tabs defaultValue="cp-31">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 mx-4">
              <div className="flex flex-col items-center py-5 justify-start border-b-2 border-gray-200">
                  <Image
                    src = "/tanjiro.jpeg"
                    height= {150}
                    width = {150}
                    alt = "logo"
                    className="rounded-full mt-4"
                  />
                  <h1 className="text-3xl mt-4 text-center break-all">Wolfenbitz123</h1>
                  <p className="text-md break-all text-center text-gray-500">I teach on youtube!</p>
              </div>
              <div className="border-b-2 mt-4 pb-6 border-gray-200 md:border-0">
                <h1 className="text-center text-md font-medium">SHEETS</h1>
                <TabsList>
                    <div className="w-full flex flex-wrap gap-4 md:gap-5 justify-center mt-4">
                        {sheets.map((sheet, index) => 
                          <TabsTrigger key = {index} value = {sheet.name}>
                            {sheet.name}
                          </TabsTrigger>
                        )}
                    </div>
                    
                </TabsList>
              </div>
        </div>
        <div className="md:col-span-3 mx-4 mt-4">
              {sheets.map((sheet, index) => 
                <TabsContent key = {index} value = {sheet.name}>
                  <Sheet/>
                </TabsContent>
              )}
        </div>
      </div>
        </Tabs> 
    </MaxWidthWrapper >
  );
}
