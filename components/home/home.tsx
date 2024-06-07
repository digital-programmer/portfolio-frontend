import Offering from "./showcase/offerings";
import Hero from "./hero/hero";
import TechStack from "./showcase/techStack";
import RecentPost from "./showcase/recentPost";
import RecentProject from "./showcase/recentProject";

export default function Home() {
  return (
    <div className="text-text-900 dark:text-text-900 md:pt-4 flex flex-col gap-24 md:gap-32">
      <Hero/>
      <TechStack/>
      <Offering/>
      <RecentPost/>
      <RecentProject/>
    </div>
  );
}
