import { Header } from "~/views/Header/Header";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { SearchSection } from "~/sections/SearchSections";
import { DownloadSection } from "~/sections/DownloadSections";
import { AboutSection } from "~/sections/AboutSections";

export default function IndexPage() {
  const isMobile = useResponsiveDevice();
  return (
    <div>
      <Header />
      <main className={`container p-8 ${isMobile ? "pt-20" : "pt-60"}`}>
        <SearchSection />
        <DownloadSection />
        <AboutSection />
      </main>
    </div>
  );
}
