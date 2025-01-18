'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multi-select"
import { tag } from "@prisma/client"
import { addMultipleWords, addNewWord } from "@/lib/wordActions"


type Props = {
  tags: Array<tag>
}

const japaneseMultipleWordFormSchema = z.object({
  japaneseVocabWordList: z.string(),
  englishDefinitionList: z.string(),
  tags: z.array(z.string()).nonempty("Please input at least one item")
})

const AddMultipleWordsForm = ({ tags }: Props) => {

  const form = useForm<z.infer<typeof japaneseMultipleWordFormSchema>>({ resolver: zodResolver(japaneseMultipleWordFormSchema), defaultValues: { "tags": ["noun"] } })

  const onSubmit = (data: z.output<typeof japaneseMultipleWordFormSchema>) => {
    const formData = new FormData()
    formData.append("japaneseVocabWordList", JSON.stringify(data.japaneseVocabWordList) )
    formData.append("englishDefinitionList", JSON.stringify(data.englishDefinitionList))
    formData.append("tags", JSON.stringify(data.tags))
    addMultipleWords(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="japaneseVocabWordList" control={form.control} render={({ field }) => {
          return (
            <FormItem>
              <FormLabel style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-hotpink-200 text-xl">
                日本語
              </FormLabel>
              <FormControl>
                <Input placeholder="かわいい" type="text" className="text-hotpink-300 placeholder:text-grayViolet-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }} />
        <div className="mt-5">
          <FormField name="englishDefinitionList" control={form.control} render={({ field }) => {
            return (
              <FormItem>
                <FormLabel style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-hotpink-200 text-xl">
                  English Definition
                </FormLabel>
                <FormControl>
                  <Input placeholder="Cute!!!" type="text" className="text-hotpink-300 placeholder:text-grayViolet-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }} />
        </div>
        <div className="mt-5">
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ textShadow: "#117bb8 2px 2px 1px" }} className="text-hotpink-200 text-xl">What kind of word is it?</FormLabel>
                <FormDescription className="text-skyBlue-300">Select multiple options.</FormDescription>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Select Tags" className="text-hotpink-300 placeholder:text-grayViolet-400" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {tags.map((tag) => {
                          return (
                            <MultiSelectorItem className="text-grayViolet-400" key={tag.id} value={tag.name}>{tag.name}</MultiSelectorItem>
                          )
                        })}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
export default AddMultipleWordsForm