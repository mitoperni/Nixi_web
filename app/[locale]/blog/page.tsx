import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog - Desarrollo Web y SEO',
    description: 'Artículos sobre desarrollo web, SEO, React, Next.js y tecnología. Consejos para crear webs profesionales.',
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Blog');

  // Placeholder blog posts
  const posts = [
    {
      slug: 'por-que-next-js-es-mejor-que-wordpress',
      title:
        locale === 'es'
          ? '¿Por qué Next.js es mejor que WordPress para tu negocio?'
          : 'Why Next.js is better than WordPress for your business?',
      excerpt:
        locale === 'es'
          ? 'Descubre las ventajas de usar Next.js frente a WordPress: velocidad, seguridad y SEO real.'
          : 'Discover the advantages of using Next.js over WordPress: speed, security and real SEO.',
      date: '2024-01-15',
      category: locale === 'es' ? 'Desarrollo Web' : 'Web Development',
      readTime: locale === 'es' ? '5 min lectura' : '5 min read',
    },
    {
      slug: 'guia-seo-local-granada',
      title:
        locale === 'es'
          ? 'Guía completa de SEO local para negocios en Granada'
          : 'Complete local SEO guide for businesses in Granada',
      excerpt:
        locale === 'es'
          ? 'Aprende a posicionar tu negocio en Google para búsquedas locales en Granada.'
          : 'Learn how to position your business on Google for local searches in Granada.',
      date: '2024-01-10',
      category: 'SEO',
      readTime: locale === 'es' ? '8 min lectura' : '8 min read',
    },
    {
      slug: 'kit-digital-como-conseguirlo',
      title:
        locale === 'es'
          ? 'Kit Digital: Cómo conseguir hasta 12.000€ para tu web'
          : 'Kit Digital: How to get up to €12,000 for your website',
      excerpt:
        locale === 'es'
          ? 'Todo lo que necesitas saber sobre las ayudas del Kit Digital en 2024.'
          : 'Everything you need to know about Kit Digital grants in 2024.',
      date: '2024-01-05',
      category: locale === 'es' ? 'Ayudas' : 'Grants',
      readTime: locale === 'es' ? '6 min lectura' : '6 min read',
    },
  ];

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

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="bg-violet-50 rounded-2xl p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                {locale === 'es' ? 'Más artículos próximamente' : 'More articles coming soon'}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Estamos preparando contenido de calidad sobre desarrollo web, SEO y tecnología. ¡No te lo pierdas!'
                  : "We're preparing quality content about web development, SEO and technology. Don't miss it!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
