"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const colors = [
  { base: 'bg-red-300', hover: 'hover:bg-red-400' },
  { base: 'bg-pink-300', hover: 'hover:bg-pink-400' },
  { base: 'bg-purple-300', hover: 'hover:bg-purple-400' },
  { base: 'bg-blue-300', hover: 'hover:bg-blue-400' },
  { base: 'bg-cyan-300', hover: 'hover:bg-cyan-400' },
  { base: 'bg-green-300', hover: 'hover:bg-green-400' },
  { base: 'bg-yellow-300', hover: 'hover:bg-yellow-400' },
  { base: 'bg-orange-300', hover: 'hover:bg-orange-400' },
  { base: 'bg-gray-300', hover: 'hover:bg-gray-400' },
  { base: 'bg-teal-300', hover: 'hover:bg-teal-400' },
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const randomIndex = getRandomInt(0, colors.length - 1);
  const { base, hover } = colors[randomIndex];

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        `inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${base} ${hover} data-[state=active]:outline data-[state=active]:outline-5 data-[state=active]:outline-offset-2 data-[state=active]:outline-gray-600`,
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
