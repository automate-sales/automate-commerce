import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path';
import { Breadcrumbs } from './seo';
import { getDictionary } from '@/app/dictionaries';
 
export default async function LocalMdx({slug, lang}:{slug: string, lang: string}) {
    const docsDirectory = path.join(process.cwd(), `/src/app/[lang]/(main)/policies`);
    const fullPath = path.join(docsDirectory, slug, `${lang}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { content, frontmatter } = await compileMDX({ source: fileContents, options: {parseFrontmatter: true} });
    const dict = await getDictionary(lang);
    return (
        <>
        <Breadcrumbs crumbs={[
                {name: dict.breadCrumbs.home, path: '/'},
                {name: dict.breadCrumbs.policies, path: '/policies'},
                {name: dict.policies[slug].title, path: '/policies/cancellation'},
            ]} />
             <div className='lg:px-32 pt-16'>
            
            <style>{`
                p, ul {
                    padding-bottom: 10px;
                }
            `}</style>
            
            <h1 className='text-center text-2xl pb-8'>{frontmatter && typeof frontmatter.title === 'string' ? frontmatter.title : null}</h1>
            <main>{content}</main>
        </div>
        </>
       
    )
}
