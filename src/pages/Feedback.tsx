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

import { Cancel } from "@/assets/svg"

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
})


const Feedback = () => {

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
    <section className="flex items-center justify-center h-scren bg-[#161616] py-[152px] tracking-tight px-4">
      <div className="modal text-[#D7D7D7] font-semibold text-xl w-[920px] h-[720px] rounded-[24px] bg-[#1C1C1C]  border border-[#393939]">
        <header className="header h-[132px] border-b border-[#393939] p-3 sm:p-6 pt-9">
          <div className="flex justify-between items-center leading-6">
            <h2 className="text-xl h-10">Feedback form</h2>
            <img src={Cancel} alt="Cancel Icon" />
          </div>
          <p className="text-[#BDBDBD] text-xs h-4">Need any feature improved on or included? Send us an email</p>
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
                        placeholder="Your message"
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
      </div> {/* MODAL */}
    </section>
  )
}

export default Feedback;

