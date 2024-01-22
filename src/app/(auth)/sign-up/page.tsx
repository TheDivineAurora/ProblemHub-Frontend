"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import * as z from "zod";
import { SignUpValidation } from '@/utils/validation.js'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'
import { Loader2 } from 'lucide-react';
import { useRegisterUser } from '@/utils/api.js';
import { useAuth } from '@/context/AuthContext';
const page = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const signUpUserMutation = useRegisterUser();
  const { login, logout } = useAuth();
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  })


  const handleSignUp = async (user: z.infer<typeof SignUpValidation>) => {
    try {
      setIsLoading(true);
      const { data } = await signUpUserMutation.mutateAsync(user);
      localStorage.setItem('token', data.token);
      console.log("User sign up succesfully", data);
      toast({ title: "User Account Created Succesfully." });
      login();
      form.reset();
    } catch (error) {
      console.log(error);
      toast({ title: "Failed to create a new account. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }
  const loginWithGoogle = () => {

  };
  return (
    <>

      <Form {...form}>
        <div className='sm:w-[420px] flex flex-col space-y-6 items-center'>
          <div className="flex flex-col space-y-2 text-center">
            <img src="/vector.svg" className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create a New account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <form
            onSubmit={form.handleSubmit(handleSignUp)}
            className="flex flex-col w-full gap-2 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="name" className="shad-input" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email" className="shad-input" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (

                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="username" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (

                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="Password" placeholder="passsword" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading || isGoogleLoading}>
              {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
              Submit
            </Button>
          </form>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button onClick={loginWithGoogle} className='w-full' variant="outline" disabled={isLoading || isGoogleLoading}>

            {isGoogleLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              :
              <FcGoogle className='h-4 w-4 mr-2'/>}

            Continue with  Google
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/sign-in"
              className="hover:text-brand underline underline-offset-4"
            >
              Already have an account? Log In
            </Link>
          </p>
        </div>
      </Form>
    </>
  )
}

export default page