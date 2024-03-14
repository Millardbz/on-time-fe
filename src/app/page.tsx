import { FeatureSection } from "@/components/home/FeatureSection";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { SearchSection } from "@/components/home/SearchSection";

export default function HomePage() {
  return (
    <div>
      <SearchSection />
      <JoinUsSection />
      <FeatureSection />
    </div>
  );
}
