import { readFileSync } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path';
 
export default async function LocalMdx({slug, lang}:{slug: string, lang: string}) {
    const docsDirectory = path.join(process.cwd(), `/src/app/[lang]/(main)/policies`);
    const fullPath = path.join(docsDirectory, slug, `${lang}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { content, frontmatter } = await compileMDX({ source: fileContents, options: {parseFrontmatter: true} });
    return (
        <div>
            <h1 className='text-center text-2xl pb-8'>{frontmatter && typeof frontmatter.title === 'string' ? frontmatter.title : null}</h1>
            <main>{content}</main>
        </div>
    )
}
