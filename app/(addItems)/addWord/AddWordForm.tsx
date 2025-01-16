'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { addNewWord } from "@/lib/wordActions"

type Props = {
  tags: Array<tag>
}

const japaneseWordFormSchema = z.object({
  japaneseVocabWord: z.string(),
  englishDef: z.string(),
  tags: z.array(z.string()).nonempty("Please at least one item")
})

const AddWordForm = ({ tags }: Props) => {

  const form = useForm<z.infer<typeof japaneseWordFormSchema>>({ resolver: zodResolver(japaneseWordFormSchema), defaultValues: { "tags": ["noun"] } })

  const onSubmit = (data: z.output<typeof japaneseWordFormSchema>) => {
    const formData = new FormData()
    formData.append("japaneseVocabWord", data.japaneseVocabWord)
    formData.append("englishDef", data.englishDef)
    formData.append("tags", JSON.stringify(data.tags))
    addNewWord(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="japaneseVocabWord" control={form.control} render={({ field }) => {
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
          <FormField name="englishDef" control={form.control} render={({ field }) => {
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
export default AddWordForm