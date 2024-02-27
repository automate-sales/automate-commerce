import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react"
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { authOptions } from "@/utils/auth";


export default async function SignIn({ params }: {params: any}) {
    const cookieStore = cookies()
    const visitorId = cookieStore.get('ergo_lead_id')?.value

    const redirectPath = params.redirect? params.redirect : '/'
    const session = await getServerSession()
    // user is authenticated
    if(session && session.user){
        if(session.user.name){
        // its a returning user
        return {
            redirect: {
            destination: redirectPath, 
            permanent: false
            }
        }
        } else {
        // its a new user
        return {
            redirect: {
            destination: `/user/info?first_login=true${params.redirect? `&redirect=${params.redirect}` : ''}`, 
            permanent: true
            }
        }
        }
    }

  return (
    <>
      
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-10 block border w-96">
          <div className="flex justify-center pb-4"><Link scroll={false} passHref href="/">
				<div className='py-1 flex items-end relative'>
					<div className='logo-circle'></div>
					<h3 className="text-xl md:text-2xl uppercase font-medium tracking-wide link">Ergonomica</h3>
				</div>
			</Link></div>
          <div id="Email">
            <form className="block" /* onSubmit={(ev)=> {
              ev.preventDefault()
              signIn("email", { email: ev.target[0].value, redirect: false })
              .then((res)=> {
                res.status && res.status == 200 ?
                console.info(`Te hemos enviado un correo. Confirmalo para iniciar sesión.`) :
                console.error('Error enviando el correo de autenticacion') 
              }).catch(err=> console.error('Error enviando el correo de autenticacion'))
            }} */>
              <input 
                type="email"
                id="email" 
                name="email" 
                placeholder="email"
                required
                className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
              />
              <button id="sendEmail" className="mt-2 p-2 border w-full flex items-center justify-center" type="submit">
                < EnvelopeIcon className="px-2" height={30} width={30} />
                <span>Sign in with Email</span>
              </button>
            </form>
          </div>
          <div id="Google" className="py-5">
            <button
              id="sendGoogle"
              className="p-2 border w-full flex items-center justify-center"
              /* onClick={(e) => {
                  e.preventDefault();
                  signIn("google")
                  .then(()=> console.log('Signed in with Google'))
                  .catch(err=> console.log('Error: ', err))
              }} */>
                <Image src="icons/google.svg" alt="" height={30} width={30}/>
                <span>Sign in with Google</span>
            </button>
          </div>
          <div id="Facebook">
            <button
              className="p-2 border w-full flex items-center justify-center"
              /* onClick={(e) => {
                  console.warn('Funcionalidad no disponible. Se puede autenticar con Google o Email.')
              }} */>
              <Image className="px-2" src="icons/facebook.svg" alt="" height={30} width={30}/>
              <span>Sign in with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}