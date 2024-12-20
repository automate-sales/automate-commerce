import Link from 'next/link'
//import Image from 'next/image'
import type { Category } from "@prisma/client";
import prisma from '@/db';
import Image from 'next/image';
import { getDictionary } from '@/app/dictionaries'
import { getIntl } from '@/utils/utils';



export default async function Footer({params}: {params: {lang:string}}) {
  const lang = params.lang;
  const dict = await getDictionary(params.lang);
  const categories = await prisma.category.findMany()

  const CategoryLinks = (categories: Array<Category>) => {
    return categories.map((cat: Category, i: number) =>
      <li key={i} className="pb-1 link">
        <Link scroll={false} passHref href={`/categories/${cat.slug}`}>{getIntl(cat.title, lang)}</Link>
      </li>
    )
  }
  return (
    <div className="pt-5 text-sm md:text-md">
      <div className="bg-zinc-600 py-3 px-5 text-white">
        <div className="pt-3">
          <h4 className="text-xl text-bold">{dict.footer.followUs}</h4>
          <div className="flex flex-wrap pt-5">
            <div className="pr-4">
              <Link passHref href="https://www.instagram.com/ergonomicadesk/">
                <Image className='white-svg' src="/icons/instagram.svg" height={22} width={22} alt="instagram" />
              </Link>
            </div>
            <div className="pr-4">
              <Link passHref href="https://www.facebook.com/ergonomicadesks/">
                <Image className='white-svg' src="/icons/facebook.svg" height={22} width={22} alt="facebook" />
              </Link>
            </div>
            <div className="pr-4">
              <Link passHref href="https://www.linkedin.com/company/ergonomica-desk">
                <Image className='white-svg' src="/icons/linkedin.svg" height={22} width={22} alt="linkedin" />
              </Link>
            </div>
            <div className="pr-4">
              <Link passHref href="https://twitter.com/ErgonomicaDesk">
                <Image className='white-svg' src="/icons/x.svg" height={22} width={22} alt="twitter" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b border-blue-300 py-5" />
        <div className="pt-3">
          <div className="grid grid-cols-1 md:grid-cols-5 font-light">
            <div>
              <h5 className="font-bold py-3">{dict.footer.products}</h5>
              <ul>
                {CategoryLinks(categories)}
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">{dict.footer.explore}</h5>
              <ul>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">{dict.footer.aboutUs}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">{dict.footer.ourPhilosophy}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/blog">{dict.footer.blog}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/categories">{dict.footer.catalogue}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">{dict.footer.support}</h5>
              <ul>
                <li className="pb-2 link"><Link scroll={false} passHref href="/faq">{dict.footer.faq}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">{dict.footer.instructions}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/delivery">{dict.footer.deliveries}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/delivery">{dict.footer.returns}</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/cancellation">{dict.footer.cancellations}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">{dict.footer.contactUs}</h5>
              <ul>
                <li className="pb-2 link"><Link passHref href="tel:+507-6953-3776">+507 69533776</Link></li>
                <li className="pb-2 link"><Link passHref href="mailto:ventas@ergonomicadesk.com">ventas@ergonomicadesk.com</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">{dict.footer.visitShowroom}</h5>
              <ul>
                <li className='pb-2'>
                {dict.footer.showroomTimings}
                </li>
                <li className='pb-2 link'>
                  <a href="https://www.google.com/maps/place/Ergonomica+Home+Office/@8.9936175,-79.499793,17z/data=!3m1!4b1!4m5!3m4!1s0x8faca8e2b9272055:0x6a9de150083231c9!8m2!3d8.9936122!4d-79.4976043" target="_blank" rel="noreferrer">
                    Calle 79 Este 14, Coco del mar, Panamá
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b border-blue-300 py-5" />
        <div  className=" py-5">
          <div style={{height: '36px'}} className="flex justify-center gap-4">
            <div><Image style={{height: '100%', width: '100%'}} src="/icons/visa.jpg" height={30} width={50} alt="visa" /></div>
            <div><Image style={{height: '100%', width: '100%'}} src="/icons/mastercard.svg" height={30} width={50} alt="mastercard" /></div>
            <div><Image style={{height: '100%', width: '100%'}} src="/icons/yappy.svg" height={30} width={50} alt="yappy" /></div>
            <div><Image style={{height: '100%', width: '100%'}} src="/icons/ach.png" height={30} width={70} alt="ach directo" /></div>
          </div>
        </div>
      </div>
      <footer className="bg-zinc-800 py-3 px-5 text-white">
        <ul className="flex">
          <li className="pb-1 pr-3"><Link scroll={false} passHref href="/policies/privacy">{dict.footer.privacyPolicy}</Link></li>
          <li className="pb-1 pr-3"><Link scroll={false} passHref href="/policies/terms">{dict.footer.termsConditions}</Link></li>
        </ul>
        <div className="text-center">
          <div>Copyright © Ergonomica 2022</div>
          <div>powered by <a href="https://torus-digital.com" className="torus">Torus</a></div>
        </div>
      </footer>
    </div>
  )

}