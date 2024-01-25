"use client"
import GoogleAuthButton from '@/components/GoogleAuthButton';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { SignInValidation } from '@/utils/validation.js';
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
const page = () => {
  const searchParams = useSearchParams()!;
  const { toast } = useToast();
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSignIn = async (user: z.infer<typeof SignInValidation>) => {
    setIsLoading(true);
    const { email, password } = user;
    signIn("credentials", {
      email,
      password
    })
    setIsLoading(false);
  }
  return (
    <>

      <Form {...form}>
        <div className='sm:w-[420px] flex flex-col space-y-6 items-center'>
          <div className="flex flex-col space-y-2 text-center">
            <img src="/vector.svg" className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Log In to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to login in to your account
            </p>
          </div>
          <form
            onSubmit={form.handleSubmit(handleSignIn)}
            className="flex flex-col w-full gap-2 mt-4">
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
          <GoogleAuthButton/>
        </div>
      </Form>
    </>
  )
}

export default page