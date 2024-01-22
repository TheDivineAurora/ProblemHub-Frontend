import * as z from "zod";

export const SignUpValidation = z.object({
    email: z.string().refine((email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),{
        message: "Invalid email format",
    }),
    name: z.string().refine((name)=>/^[a-zA-Z\s]+$/.test(name),{
        message: "Invalid name",
    }),
    username: z.string().refine((username)=>/^[a-zA-Z0-9]+$/.test(username),{
        message: "Invalid username",
    }),
    password: z.string().min(8,{message: "Password should be longer than 8 chars"})

})

export const SignInValidation = z.object({
    username: z.string().refine((username)=>/^[a-zA-Z0-9]+$/.test(username),{
        message: "Invalid username",
    }),
    password: z.string().min(8,{message: "Password should be longer than 8 chars"}).refine((password)=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password),{
        message: "Invalid Password",
    }),
})