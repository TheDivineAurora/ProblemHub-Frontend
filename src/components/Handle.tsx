import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/handletabs"

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import Dropzone from "./Dropzone"
import { Card } from "./ui/card"

const Handle = () => {
  return (
    <Dialog>
      <DialogTrigger >Open</DialogTrigger>
      <DialogContent className="bg-white max-w-[600px] h-[500px]">
        <Tabs defaultValue="1" className="w-full">
          <TabsList className="w-full gap-16">
            <TabsTrigger value="1" className="rounded-full">1</TabsTrigger>
            <TabsTrigger value="2" className="rounded-full">2</TabsTrigger>
            <TabsTrigger value="3" className="rounded-full">3</TabsTrigger>
            <TabsTrigger value="4" className="rounded-full">4</TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <Card>
            <Dropzone className="p-16 border border-neutral-200"/>
            </Card>
          </TabsContent>
          <TabsContent value="2">Change your password here.</TabsContent>
          <TabsContent value="3">Make changes to your account here.</TabsContent>
          <TabsContent value="4">Change your password here.</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>


  )
}

export default Handle