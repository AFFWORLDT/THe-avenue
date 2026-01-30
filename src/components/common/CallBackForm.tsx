"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/src/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  budget: z.string().optional(),
  propertyType: z.string().optional(),
  questions: z.string().optional(),
});

export default function CallBackForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      budget: "",
      propertyType: "",
      questions: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
    alert("Thank you! We will be in touch shortly.");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">Full Name <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="h-12 bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 placeholder:text-gray-400 transition-all" />
              </FormControl>
              <FormMessage className="text-red-500 font-light text-sm" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">Phone Number <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="+971 50..." {...field} className="h-12 bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 placeholder:text-gray-400 transition-all" />
                </FormControl>
                <FormMessage className="text-red-500 font-light text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">E-mail <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} className="h-12 bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 placeholder:text-gray-400 transition-all" />
                </FormControl>
                <FormMessage className="text-red-500 font-light text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">Budget Range (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 transition-all">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-gray-100 text-gray-900 shadow-xl">
                  <SelectItem value="under_1m" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Under AED 1 Million</SelectItem>
                  <SelectItem value="1m_3m" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">AED 1–3 Million</SelectItem>
                  <SelectItem value="3m_7m" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">AED 3–7 Million</SelectItem>
                  <SelectItem value="above_7m" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Above AED 7 Million</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 font-light text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">Property Type Looking For (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 transition-all">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border-gray-100 text-gray-900 shadow-xl">
                  <SelectItem value="apartment" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Apartment</SelectItem>
                  <SelectItem value="villas" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Villas</SelectItem>
                  <SelectItem value="townhouse" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Townhouse</SelectItem>
                  <SelectItem value="commercial" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Land/Commercial</SelectItem>
                  <SelectItem value="others" className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">Others</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 font-light text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-serif tracking-wide font-medium">Any specific requirements or questions?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your investment goals..."
                  className="resize-none bg-white border-gray-200 text-gray-900 focus:border-[#dbbb90] focus:ring-[#dbbb90]/20 min-h-[120px] placeholder:text-gray-400 transition-all"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-light text-sm" />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] text-white hover:from-[#C2A17B] hover:to-[#B8956A] font-serif tracking-[0.2em] uppercase h-14 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
          Submit Request
        </Button>
      </form>
    </Form>
  );
}
