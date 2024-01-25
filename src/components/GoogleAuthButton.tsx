"use client"
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
const GoogleAuthButton = () => {
  const searchParams = useSearchParams()!;
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
 

  const loginWithGoogle = async () => {
    setIsGoogleLoading(true);
    try{
      let callbackUrl = searchParams.get("callbackUrl")!;

      if (callbackUrl === null) {
        callbackUrl = "/dashboard";
      }
      
      signIn("google",{callbackUrl})
      toast({title: 'Login Succesful,Redirecting!'})
    }
    catch(error : any){
      console.log(error);
      toast({title: 'Failed to login with google'})
    }
    finally{
      setIsGoogleLoading(false);
    }
    

  };
  return (
    <>
          <Button onClick={loginWithGoogle} className='w-full' variant="outline" disabled={isGoogleLoading}>

            {isGoogleLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              :
              <FcGoogle className='h-4 w-4 mr-2' />}

            Continue with  Google
          </Button>
    </>
  )
}

export default GoogleAuthButton