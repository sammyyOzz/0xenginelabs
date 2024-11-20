"use server"

import { ContactFormSchema } from "@/lib/form-schema";

export async function createContact(formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // const name = formData.get('name');
  // const email = formData.get('email');
  // const message = formData.get('message');

  // try {
  //   const res = await fetch(`${api.churchBaseUrl}/contacts/create-contact`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, body: message }),
  //   });
  
  //   const data = await res.json();

  //   revalidatePath('/cms/contacts')
    
  //   if (data.status === "success") {
  //     return { isSuccess: true, data, message: "create contact success" };
  //   }

  //   return { isSuccess: false, data: null, message: "server error" };

  // } catch (err) {
  //   return { isSuccess: false, data: err, message: "server error" };
  // }
}