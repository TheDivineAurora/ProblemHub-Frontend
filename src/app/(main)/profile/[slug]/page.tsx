'use client'
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Sheet from "@/components/Sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import axios, { AxiosResponse } from "axios";
import { User } from "@/lib/models";

const sheets = [ {name : "cp-31"}, {name : "cp-32"}, {name: "cp-36"}, {name: "beginner-friendly"}, {name : "personal-choice"}]
const page = ({ params }: { params : { slug : string }}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(()=>{
    const fetchUserData = async () => {
      try {
          const res : AxiosResponse<{data : User}> = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/`,{
            params: { username : params.slug},
            withCredentials : true
          })
        console.log(res);
        setUser(res.data.data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchUserData();
    console.log(user);
  },[])
  return ( 
    <MaxWidthWrapper>
      {!user? <div> User not found </div> : (
      <Tabs defaultValue="cp-31">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 mx-4">
              <div className="flex flex-col items-center py-5 justify-start border-b-2 border-gray-200">
                  <img
                    src = {user?.profileImageUrl ? `${user.profileImageUrl}` : "/tanjiro.jpeg"}
                    
                    alt = "logo"
                    className="rounded-full mt-4 h-[150px] w-[150px]"
                  />
                  <h1 className="text-3xl mt-4 text-center break-all">{user.username}</h1>
                  {/* <p className="text-md break-all text-center text-gray-500">{user.username}</p> */}
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
    )}
    </MaxWidthWrapper >
  );
}
export default page;