import { cookies } from "next/headers";
import Link from "next/link";
import { getCurrentUser } from "@/utils/auth";
import LoginForm from "@/app/components/login";
import { permanentRedirect, redirect } from "next/navigation";

export default async function SignIn({ params }: {params: any}) {
    const cookieStore = cookies()
    const visitorId = cookieStore.get('ergo_lead_id')?.value
    const redirectPath = params.redirect? params.redirect : '/'

    const user = await getCurrentUser()
    
    if(user){
        if(user.name){
          redirect(redirectPath)
        } else {
          permanentRedirect(`/user/info?first_login=true${params.redirect? `&redirect=${params.redirect}` : ''}`)
        }
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-10 block border w-96">
          <div className="flex justify-center pb-4">
            <Link scroll={false} passHref href="/">
              <div className='py-1 flex items-end relative'>
                <div className='logo-circle'></div>
                <h3 className="text-xl md:text-2xl uppercase font-medium tracking-wide link">Ergonomica</h3>
              </div>
            </Link>
          </div>

          <LoginForm />
        </div>
      </div>
    </>
  )
}