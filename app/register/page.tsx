"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8)
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm
    },
    { message: "Passwords must match... \u{1F63A}\u{1F496}\u{1F63A}\u{1F496}\u{1F63A}", path: ["passwordConfirm"] }
  )

const RegistrationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const handleSubmit = () => {
    console.log("Submitted")
  }

  return (
    <div className="flex h-[550px] w-[550px] flex-col items-center justify-between p-16 bg-skyBlue-50 rounded-lg shadow-sm shadow-grayViolet-900 ">
      <Form {...form}>
        <form className="w-5/6 -mt-8" onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    style={{ textShadow: "#117bb8 2px 2px 1px" }}
                    className="text-hotpink-200 text-xl"
                  >
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="BellCranel@Hestia-Sama.com" type="email" className="text-skyBlue-400 placeholder:text-grayViolet-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <div className="mt-5 flex justify-between">
            <div className="mr-2">
              <FormField control={form.control} name="firstName" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel
                      style={{ textShadow: "#117bb8 2px 2px 1px" }}
                      className="text-hotpink-200 text-xl"
                    >
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Bell" type="text" className="text-skyBlue-400 placeholder:text-grayViolet-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
              />
            </div>
            <div className="ml-2">
              <FormField control={form.control} name="lastName" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel style={{ textShadow: "#117bb8 2px 2px 1px" }}
                      className="text-hotpink-200 text-xl">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Cranel" type="text" className="text-skyBlue-400 placeholder:text-grayViolet-400" {...field} />
                    </FormControl>
                  </FormItem>
                )
              }}
              />
            </div>
          </div>
          <div className="mt-5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel
                      style={{ textShadow: "#117bb8 2px 2px 1px" }}
                      className="text-hotpink-200 text-xl"
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="かわいい" type="password" className="text-skyBlue-400 placeholder:text-grayViolet-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
          <div className="mt-5">
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel
                      style={{ textShadow: "#117bb8 2px 2px 1px" }}
                      className="text-hotpink-200 text-xl"
                    >
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="かわいい" type="password" className="text-skyBlue-400 placeholder:text-grayViolet-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
          <Button
            type="submit"
            style={{float: "right"}}
            className="mt-5 border-2 border-hotpink-200 bg-hotpink-200 text-skyBlue-600 text-lg 
            hover:bg-skyBlue-600 hover:text-hotpink-200 hover:border-skyBlue-600 
            active:bg-hotpink-50 active:text-skyBlue-600"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
export default RegistrationPage
