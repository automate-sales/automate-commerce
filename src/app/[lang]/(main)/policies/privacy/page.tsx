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
        dict.policies.privacy.title,
        dict.policies.privacy.description,
        params.lang,
        undefined,
        'policies/privacy'
    )
}
export default function Page({ params: { lang } }: { params: { lang: string } }) {
    return <LocalMdx slug="privacy" lang={lang} />
}