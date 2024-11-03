"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";


const ShareFormSchema = z.object({
    email: z.string().email({
        message: "Please provide a valid email address."
    }).min(5, {
        message: "Email must contain at least 5 characters."
    }).max(40, {
        message: "Email cannot exceed 40 characters."
    }).toLowerCase(),
    accessType: z.enum(["anyone", "invite"], {
        required_error: "You need to select how your project can be accessed.",
    }),
});

const ShareForm = () => {

    const form = useForm<z.infer<typeof ShareFormSchema>>({
        resolver: zodResolver(ShareFormSchema),
        defaultValues: {
            email: "",
            accessType: "anyone"
        },
    })

    function onSubmit(data: z.infer<typeof ShareFormSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mb-8 sm:flex-row"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input
                                    placeholder="Invite others by email"
                                    className="text-gray-60 placeholder:text-black-50 text-base font-medium border border-black-60 py-[1.125rem] px-3 rounded-lg"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="font-semibold w-fit py-[1.125rem] px-6 text-base border-2 border-green-70 shadow-[0_0_0_2px_#06596540] max-w-[451px] transition-all duration-300 hover:brightness-[0.85]"
                >
                    Invite
                </Button>
            </form>
        </Form>
    )
}

export default ShareForm;