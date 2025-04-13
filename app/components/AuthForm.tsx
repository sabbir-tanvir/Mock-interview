"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Add this import

// Add this type definition
type FormType = 'sign-in' | 'sign-up';

const formSchema = z.object({
    name: z.string().min(2).max(20),
});


const AuthFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3).max(20) : z.string().optional(),

        email: z.string().email(),
        password: z.string().min(6),
    });

}

const AuthForm = ({ type }: { type: FormType }) => {

    const router = useRouter();
    const formSchema = AuthFormSchema(type);


    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === 'sign-up') {
                // Call the sign-up API.
                toast.success("Account created successfully!");
                router.push('/sign-in');
            } else {
                // Call the sign-in API.
                toast.success("Logged in successfully!");
                router.push('/');
            }

        } catch (error) {
            console.log(error);
            toast.error(`An error occurred. ${error}`);
        }
    }

    const isSignIn = type === 'sign-in';

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row justify-center">
                    <Image src="/logo.svg" alt="logo" width={32} height={38} />
                    <h2 className="text-primary-100">MockTest</h2>
                </div>
                <h3>Practice job interview with Ai</h3>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (
                            <FormField control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Your Name"
                                type="text"
                            />
                        )}
                        <FormField control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Your Email address"
                            type="email"
                        />
                        <FormField control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Your Password"
                            type="password"

                        />

                        <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an account'}</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                    <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-bold text-user-primary ml-1">
                        {!isSignIn ? 'Sign in' : 'Sign up'} </Link>
                </p>
            </div>
        </div >
    );
};

export default AuthForm;