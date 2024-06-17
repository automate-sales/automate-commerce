import Navbar from '../components/nav/nav'
import { getCurrentUser } from '@/utils/auth'
import Footer from '../components/footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDictionary } from '@/app/dictionaries'
import locales from '@/utils/locales';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: string}
}) {
  const dict = await getDictionary(params.lang);
  const user = await getCurrentUser();
  let itemCount = 0;
  return (
    <>
      <Navbar
        search={true}
        user={user}
        links={[
          {id: '1', label: 'Blog', type: 'link', url: '/blog'},
          {id: '2', label: 'Soporte', type: 'dropdown', options: [
            {id: '1', label: 'FAQ', url: '/faq'},
            {id: '2', label: 'Entregas', url: '/policies/delivery'},
            {id: '3', label: 'Devoluciones', url: '/policies/returns'},
            {id: '4', label: 'Cancelaciones', url: '/policies/cancellation'},
            {id: '5', label: 'Contacto', url: '/contact'},
          ]}
        ]}
        languages={locales}
        lang={params.lang}
        cartLength={itemCount}
      />
      <div className='pt-16'>{children}</div>
      <ToastContainer/>
      <Footer params={params}/>
    </>
  );
}
