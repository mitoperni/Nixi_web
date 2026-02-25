import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getAllPostsMeta } from '@/lib/mdx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.blog' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Blog');
  const posts = getAllPostsMeta(locale);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('description')}</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
                <Card className="h-full cursor-pointer">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="primary" size="sm">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString(
                      locale === 'es' ? 'es-ES' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
