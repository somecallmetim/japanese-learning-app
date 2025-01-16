'use client'

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { addTag } from "@/lib/tagActions"

const addTagSchema = z.object({
  tags: z.string()
})

const onSubmit = (data: z.output<typeof addTagSchema>) => {
  const formData = new FormData()
  formData.append("tags", data.tags)
  addTag(formData)
}

const AddTags = () => {

  const form = useForm<z.infer<typeof addTagSchema>>({ resolver: zodResolver(addTagSchema) })

  return (

    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="tags" control={form.control} render={({ field }) => {
          return (
            <FormItem>
              <FormLabel style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-hotpink-200 text-xl">
                Enter Tags
              </FormLabel>
              <FormControl>
                <Input placeholder="noun, verb, adjective" type="text" className="text-hotpink-300 placeholder:text-grayViolet-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }} />
        <Button
          type="submit"
          style={{ float: "right" }}
          className="mt-5 border-2 border-hotpink-200 bg-hotpink-200 text-skyBlue-600 text-lg 
          hover:bg-skyBlue-600 hover:text-hotpink-200 hover:border-skyBlue-600 
          active:bg-hotpink-50 active:text-skyBlue-600"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}
export default AddTags