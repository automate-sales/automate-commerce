"use client";

import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { loginEvent } from "@/utils/analytics";
import { getLead } from "@/utils/leads/client";

const signInStatus = async (email: string) => {
  const res = await signIn("email", { email: email, redirect: false })
  if(res && res.status && res.status == 200) return res
  else {
    console.error('Error sending auth email ', res)
    throw new Error('Error sending auth email')
  }
}

export default function LoginForm() {
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      
      const res = await toast.promise(signInStatus(input.value), {
        pending: "Authenticating",
        success: "Sign in link sent to your email",
        error: "Authentication failed. Please try again.",
      });
      console.log('login RESSSS ', res?.status == 200)
      const lead = await getLead() || ''
      loginEvent(lead, "email")
      
    } catch (err) {
      toast.error("Error enviando el correo de autenticacion");
      console.error("Error enviando el correo de autenticacion ", err);
    }
  };

  return (
    <>
      <div id="Email">
        <form className="block" onSubmit={submitForm}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
            className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
          />
          <button
            id="sendEmail"
            className="mt-2 p-2 border w-full flex items-center justify-center"
            type="submit"
          >
            <EnvelopeIcon className="px-2" height={30} width={30} />
            <span>Sign in with Email</span>
          </button>
        </form>
      </div>
      <div id="Google" className="py-5">
        <button
          id="sendGoogle"
          className="p-2 border w-full flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            signIn("google")
              .then(() => console.log("Signed in with Google"))
              .catch((err) => console.log("Error: ", err));
          }}
        >
          <Image src="icons/google.svg" alt="" height={30} width={30} />
          <span>Sign in with Google</span>
        </button>
      </div>
      <div id="Facebook">
        <button
          className="p-2 border w-full flex items-center justify-center"
          onClick={(e) => {
            console.warn("Funcionalidad no disponible. Se puede autenticar con Google o Email.");
          }}
        >
          <Image className="px-2" src="icons/facebook.svg" alt="" height={30} width={30} />
          <span>Sign in with Facebook</span>
        </button>
      </div>
    </>
  );
}
