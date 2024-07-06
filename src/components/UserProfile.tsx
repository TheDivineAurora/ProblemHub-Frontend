"use client"
import React from 'react'
import { Button } from './ui/button'
import { useToast } from '@/components/ui/use-toast';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import axios from 'axios';
import { useRouter } from 'next/navigation';



const UserProfile = () => {
    const { toast } = useToast();
    const { user, logout} = useAuth();
    const Router = useRouter();
    const handleLogout = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {}, {
                withCredentials : true
            });
            logout();
            toast({
                title : "Logged Out Successfully!"
            })
            Router.push('/sign-in');
        } catch(error){
            console.log(error);
            toast({
                title : "Failed to Log Out"
            })
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='overflow-visible'>
                <Button
                    size="sm"
                    variant="ghost"
                    className='relative'>
                    My Account
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className='bg-white w-60'
                align="end">
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-0.5 leading-none'>
                        <p className='font-medium text-sm text-black'>{user?.username}</p> 
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href='/dashboard'>Your Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem 
                    onClick={handleLogout}
                    className='cursor-pointer'>
                        Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile