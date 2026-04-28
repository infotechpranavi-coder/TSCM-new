import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';

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

  return <CaseStudyDetail study={study} previousStudy={previousStudy} nextStudy={nextStudy} />;
}
