"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const FormSchema = z.object({
    email: z.string({
        required_error: "Email is required.",
        invalid_type_error: "Invalid email."
    }).email().min(5, {
        message: "Email must contain at least 5 characters."
    }).max(40, {
        message: "Email cannot exceed 40 characters."
    }).toLowerCase(),
    message: z.string({
        required_error: "Message is required."
    }).trim().min(1, {
        message: "Message must contain at least 1 character."
    }).max(500, {
        message: "Message cannot exceed 500 characters."
    })
});


const Contact = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            message: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }


    return (
        <section
            id="contact"
            className="my-40"
        >

            <header className="text-center">
                <h2 className="text-gray-10 font-bold text-[clamp(1.5rem,calc(1.5rem+2vw),3.5rem)]">Contact us</h2>
                <p className="text-gray-30 text-[1.375rem] mb-24">Need any feature improved on or included? Send us an email.</p>
            </header>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col bg-black-80 border-2 border-black-80 p-6 pb-10 rounded-3xl max-w-[920px] mx-auto shadow-[0_0_32px_8px_#14141440]"
                >
                    <div className="space-y-6 mb-32">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter email"
                                            className="text-gray-60 placeholder:text-black-50 text-base font-medium border border-black-60 py-6 pl-3 pr-[0.625rem] rounded-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            rows={8}
                                            className="resize-none text-gray-60 placeholder:text-black-50 text-base font-medium border border-black-60 py-6 pl-3 pr-[0.625rem] rounded-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="self-center bg-gradient-primary w-full font-semibold text-base border border-green-60 shadow-[0_0_2px_4px_#04414940] max-w-[451px] transition-all duration-300 hover:brightness-[0.85]"
                    >
                        Send
                    </Button>
                </form>
            </Form>
        </section>
    )
}

export default Contact;