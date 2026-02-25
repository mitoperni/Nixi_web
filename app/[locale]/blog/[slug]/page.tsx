import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Badge from '@/components/ui/Badge';
import { getPost, getAllSlugs } from '@/lib/mdx';

const mdxComponents = {
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="not-prose my-8 w-full overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-violet-50 border-b border-violet-200" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-violet-700"
      {...props}
    />
  ),
  tbody: (props: ComponentPropsWithoutRef<'tbody'>) => (
    <tbody className="divide-y divide-gray-100 bg-white" {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<'tr'>) => (
    <tr className="transition-colors last:bg-violet-50/60 last:font-semibold" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="px-6 py-3.5 text-gray-700" {...props} />
  ),
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ['es', 'en'];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nixi.es').replace(/\/$/, '');
  const postUrl = `${siteUrl}/${locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      siteName: 'Nixi Web',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      publishedTime: post.date,
      authors: ['Nixi Web'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: postUrl,
      languages: {
        'es': `${siteUrl}/es/blog/${slug}`,
        'en': `${siteUrl}/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('Blog');
  const post = getPost(locale, slug);

  if (!post) {
    notFound();
  }

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
              {post.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 mb-12">
            <span>
              {new Date(post.date).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-lg prose-violet max-w-none
            prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-li:text-gray-700
            prose-strong:text-gray-900
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={mdxComponents} />
          </div>

          {/* CTA */}
          <div className="bg-violet-50 rounded-2xl p-10 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {locale === 'es'
                ? '¿Hablamos de tu proyecto?'
                : 'Shall we talk about your project?'}
            </h2>
            <p className="text-gray-600 mb-6">
              {locale === 'es'
                ? 'En Nixi Web desarrollamos webs profesionales en Granada con Next.js. Sin plantillas, sin límites.'
                : 'At Nixi Web we develop professional websites in Granada with Next.js. No templates, no limits.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-dark transition"
            >
              {locale === 'es' ? 'Solicitar presupuesto gratis' : 'Request a free quote'}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
