import Section, { SectionHeader } from '@/components/ui/Section'
import { CatCardSkeletonGrid } from '@/components/ui/CatCardSkeleton'

export default function AdocaoLoading() {
  return (
    <>
      {/* Hero Section */}
      <Section background="verde-dark" className="py-16" showPawDecoration>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Adote um Gatinho
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Todos os gatos são castrados e vacinados.
          </p>
        </div>
      </Section>

      {/* Loading Skeletons */}
      <Section showPawDecoration>
        <SectionHeader
          title="Gatinhos Disponíveis"
          subtitle="Carregando gatinhos..."
          showPaws
        />
        <CatCardSkeletonGrid count={6} />
      </Section>
    </>
  )
}
