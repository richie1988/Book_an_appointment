// import { Button } from "@/components/ui/button"
import HeroSection from "./_components/HeroSection";
import CategorySection from "./_components/CategorySection";

export default function Home() {
  return (
    <div>
      {/*Hero section goes here */}
      <HeroSection/>
      {/*Category section + search bar */}
      <CategorySection/>
    </div>
  );
}
