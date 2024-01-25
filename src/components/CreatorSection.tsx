import React from 'react'
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
const channels = [

    {
        id: "wolfenbitz",
        name: "wolfenbitz",
        image: "https://avatars.githubusercontent.com/u/4608155?s=128&v=4"
    },
    {
        id: "wolfenbitz1",
        name: "wolfenbitz1",
        image: "https://avatars.githubusercontent.com/u/4608155?s=128&v=4"
    }
]
export const CreatorSection = () => {

    return (
        <div className='className="flex flex-col w-full"'>
            <Select>
                <SelectTrigger className="text-2xl w-[300px] h-fit mt-6">
                    <SelectValue placeholder="Select Channel" />
                </SelectTrigger>
                <SelectContent className="bg-white ">
                    <div className="space-y-2">
                        {channels.map((channel) => (
                            <SelectItem key={channel.name} value={channel.name} className=" bg-white hover:bg-blue-50">
                                <div className="flex flex-1 items-center  text-2xl gap-3 ">
                                    <img src={channel.image} className="w-8 h-8 rounded-full" alt="logo" />
                                    {channel.name}
                                </div>
                            </SelectItem>
                        ))}
                    </div>
                </SelectContent>
            </Select>
            <Tabs defaultValue="account" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-2 ">
                    <TabsTrigger value="account">Your Handles</TabsTrigger>
                    <TabsTrigger value="password">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
