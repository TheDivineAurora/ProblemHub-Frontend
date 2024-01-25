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
import Handle from './Handle'
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
export const EditorSection = () => {

    return (
        <div className='className="flex flex-col w-full"'>
            <Tabs defaultValue="pending" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-2 ">
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="pending">
                       <Handle/>
                </TabsContent>
                <TabsContent value="completed">
                       <Handle/>
                </TabsContent>
            </Tabs>
        </div>
    )
}
