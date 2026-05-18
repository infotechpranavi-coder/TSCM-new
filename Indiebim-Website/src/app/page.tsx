import HomePageContent from './HomePageContent';
import { homepageSchemaGraph } from '@/data/schema/homepage';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchemaGraph) }}
      />
      <HomePageContent />
    </>
  );
}
