import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Artículo - Blog Nixi',
    description: 'Lee nuestros artículos sobre desarrollo web, SEO y tecnología.',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('Blog');

  // This is a placeholder. In a real implementation, you would fetch the post content
  // from MDX files or a CMS based on the slug

  return (
    <div>
      <article className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t('back')}
          </Link>

          <div className="mb-8">
            <Badge variant="primary" size="md">
              {locale === 'es' ? 'Desarrollo Web' : 'Web Development'}
            </Badge>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            {locale === 'es'
              ? 'Artículo de ejemplo'
              : 'Example article'}
          </h1>

          <div className="flex items-center text-gray-600 mb-12">
            <span>
              {new Date().toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="mx-3">•</span>
            <span>{locale === 'es' ? '5 min lectura' : '5 min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {locale === 'es'
                ? 'Este es un artículo de ejemplo. En una implementación real, el contenido se cargaría desde archivos MDX o un CMS.'
                : 'This is an example article. In a real implementation, the content would be loaded from MDX files or a CMS.'}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              {locale === 'es' ? 'Implementación del Blog' : 'Blog Implementation'}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {locale === 'es'
                ? 'Para implementar el blog completo, puedes utilizar varias estrategias:'
                : 'To implement the complete blog, you can use several strategies:'}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                {locale === 'es'
                  ? 'MDX: Archivos Markdown con componentes React embebidos'
                  : 'MDX: Markdown files with embedded React components'}
              </li>
              <li>
                {locale === 'es'
                  ? 'CMS Headless: Como Contentful, Sanity o Strapi'
                  : 'Headless CMS: Like Contentful, Sanity or Strapi'}
              </li>
              <li>
                {locale === 'es'
                  ? 'Sistema de archivos: Leer archivos .md desde /content/blog'
                  : 'File system: Read .md files from /content/blog'}
              </li>
            </ul>

            <div className="bg-violet-50 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">
                {locale === 'es' ? 'Nota del desarrollador' : "Developer's note"}
              </h3>
              <p className="text-gray-700">
                {locale === 'es'
                  ? 'Esta es una estructura base para el blog. Puedes expandirla agregando contenido real en archivos MDX dentro de la carpeta /content/blog.'
                  : 'This is a base structure for the blog. You can expand it by adding real content in MDX files inside the /content/blog folder.'}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
