import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { buildBreadcrumbSchema } from '@/data/schema/breadcrumbs';
import { buildCaseStudyArticleSchema } from '@/data/schema/special';

type CaseStudyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === slug);
  const previousStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : undefined;

  const articleSchema = buildCaseStudyArticleSchema({
    slug: study.slug,
    headline: study.title,
    description: study.summary,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home' },
    { name: 'Case Studies', path: '/case-study' },
    { name: study.title, path: `/case-study/${study.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyDetail study={study} previousStudy={previousStudy} nextStudy={nextStudy} />
    </>
  );
}
