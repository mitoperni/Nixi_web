import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Portfolio - Proyectos de Nixi',
    description: 'Descubre los proyectos web desarrollados por Nixi. Webs y aplicaciones hechas con código real.',
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isSpanish = locale === 'es';

  // Placeholder projects
  const projects = [
    {
      title: isSpanish ? 'Tienda Online Moda' : 'Fashion Online Store',
      description: isSpanish
        ? 'E-commerce completo con Next.js y pasarela de pago'
        : 'Complete e-commerce with Next.js and payment gateway',
      tech: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      category: 'E-commerce',
    },
    {
      title: isSpanish ? 'Web Corporativa Abogados' : 'Law Firm Corporate Website',
      description: isSpanish
        ? 'Web profesional optimizada para SEO local'
        : 'Professional website optimized for local SEO',
      tech: ['Next.js', 'TypeScript', 'SEO'],
      category: isSpanish ? 'Corporativa' : 'Corporate',
    },
    {
      title: isSpanish ? 'App Gestión Restaurantes' : 'Restaurant Management App',
      description: isSpanish
        ? 'Aplicación web para gestión de pedidos y reservas'
        : 'Web application for order and reservation management',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      category: isSpanish ? 'Aplicación Web' : 'Web App',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600">
            {isSpanish
              ? 'Proyectos web desarrollados con código real'
              : 'Web projects developed with real code'}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx}>
                <div className="mb-4">
                  <Badge variant="primary" size="sm">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="bg-violet-50 rounded-2xl p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                {isSpanish ? 'Más proyectos próximamente' : 'More projects coming soon'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isSpanish
                  ? 'Estamos trabajando con varios clientes en proyectos increíbles. ¡Vuelve pronto para ver más!'
                  : "We're working with several clients on amazing projects. Come back soon to see more!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
