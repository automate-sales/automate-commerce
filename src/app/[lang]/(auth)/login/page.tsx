import Link from "next/link";
import { getCurrentUser } from "@/utils/auth";
import LoginForm from "@/app/[lang]/components/login";
import { permanentRedirect, redirect } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'
import { getDictionary } from "@/app/dictionaries";
import { Breadcrumbs, Props, seoCompotnent } from "../../components/seo";
//import Session from "../../components/session";


export default async function SignIn({ params, searchParams }: { params: { lang: string }, searchParams: { redirect: string} }) {
  //const cookieStore = cookies()
  //const visitorId = cookieStore.get('ergo_lead_id')?.value
  const dict = await getDictionary(params.lang)
  let redirectPath = searchParams.redirect ? searchParams.redirect : '/'
  const user = await getCurrentUser()
  
  if (user) {
    if (user.username) {
      //toast.success(`Welcome back ${user.username}`)
      // redirect to a client side page that will trigger a success notification and redirect via clientside
      // if cart of user is defferent to lead 
      if(user.swapModal) {
        redirectPath = `/user/cart/${user.swapModal}`
      }
      redirect(redirectPath)
    } else {
      permanentRedirect(`/user/info?first_login=true${searchParams.redirect ? `&redirect=${searchParams.redirect}` : ''}`)
    }
  }

  return (
    <>
      <Breadcrumbs crumbs={[
        {name: dict.breadCrumbs.home, path: '/'},
        {name: dict.login.title, path: '/login'},
      ]} />
      {/* <Session username={user?.username} redirectPath={redirectPath} /> */}
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

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return seoCompotnent(
    dict.login.title,
    dict.login.description,
    params.lang,
    undefined,
    'login'
  )
}