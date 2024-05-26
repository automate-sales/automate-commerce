import LocalMdx from "@/app/[lang]/components/markdown";

export default function Page({ params: { lang }}: { params: { lang: string } }){
    return <LocalMdx slug="terms" lang={lang} />
}