import Link from 'next/link'
//import Image from 'next/image'

import { Instagram, Facebook, Linkedin, Twitter } from 'react-feather'
import type { Category } from "@prisma/client";
import prisma from '@/db';
import Image from 'next/image';


const CategoryLinks = (categories: Array<Category>) => {
  return categories.map((cat: Category, i: number) =>
    <li key={i} className="pb-1 link">
      <Link scroll={false} passHref href={`/categories/${cat.slug}`}>{cat.title}</Link>
    </li>
  )
}

export default async function Footer() {
  const categories = await prisma.category.findMany()
  return (
    <div className="pt-5 text-sm md:text-md">
      <div className="bg-zinc-600 py-3 px-5 text-white">
        <div className="pt-3">
          <h4 className="text-xl text-bold">Síguenos</h4>
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
              <h5 className="font-bold py-3">Productos</h5>
              <ul>
                {CategoryLinks(categories)}
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">Explore</h5>
              <ul>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">Sobre Nosotros</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">Nuestra Filosofía</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/blog">Blog</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/categories">Catalogo</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">Soporte</h5>
              <ul>
                <li className="pb-2 link"><Link scroll={false} passHref href="/faq">FAQ</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/">Instrucciones</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/delivery">Entregas</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/delivery">Devoluciones</Link></li>
                <li className="pb-2 link"><Link scroll={false} passHref href="/policies/cancellation">Cancelaciones</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">Contáctenos</h5>
              <ul>
                <li className="pb-2 link"><Link passHref href="tel:+507-6953-3776">+507 69533776</Link></li>
                <li className="pb-2 link"><Link passHref href="mailto:ventas@ergonomicadesk.com">ventas@ergonomicadesk.com</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold py-3">Visita nuestro showroom</h5>
              <ul>
                <li className='pb-2'>
                  Estamos abiertos de lunes a viernes 12PM-6PM y sabados de 9AM-12PM
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
        <div className="flex justify-center py-5">
          <div className="flex px-3 py-2">
            <div className="px-2"><Image src="/icons/visa.jpg" height={30} width={50} alt="visa" /></div>
            <div className="px-2"><Image src="/icons/mastercard.svg" height={30} width={50} alt="mastercard" /></div>
            <div className="px-2"><Image src="/icons/yappy.svg" height={30} width={50} alt="yappy" /></div>
            <div className="px-2"><Image src="/icons/ach.png" height={30} width={70} alt="ach directo" /></div>
          </div>
        </div>
      </div>
      <footer className="bg-zinc-800 py-3 px-5 text-white">
        <ul className="flex">
          <li className="pb-1 pr-3"><Link scroll={false} passHref href="/policies/privacy">Políticas de Privacidad</Link></li>
          <li className="pb-1 pr-3"><Link scroll={false} passHref href="/policies/terms">Términos y Condiciones</Link></li>
        </ul>
        <div className="text-center">
          <div>Copyright © Ergonomica 2022</div>
          <div>powered by <a href="https://torus-digital.com" className="torus">Torus</a></div>
        </div>
      </footer>
    </div>
  )

}