import Features from "@/components/organisms/Features";
import Hero from "@/components/organisms/Hero";
import RecentProjects from "@/components/organisms/RecentsProjects";
import Reviews from "@/components/organisms/Reviews";



export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <RecentProjects />
      <Reviews />
    </main>
  )
}


