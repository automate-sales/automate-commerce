import LocalMdx from "@/app/[lang]/components/markdown";
import { getDictionary } from '@/app/dictionaries';
import type { Metadata, ResolvingMetadata } from 'next'
import { Props, seoCompotnent } from '@/app/[lang]/components/seo';

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(params.lang)
    return seoCompotnent(
        dict.policies.delivery.title,
        dict.policies.delivery.description,
        params.lang,
        undefined,
        'policies/delivery'
    )
}
export default function Page({ params: { lang } }: { params: { lang: string } }) {
    return <LocalMdx slug="delivery" lang={lang} />
}