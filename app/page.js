import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // Filter and sanitize blog entries
  const filtered = data
    .filter((item) => item?.cover_image) // Only keep blogs with cover_image
    .map((item) => ({
      title: item.title || "Untitled",
      description: item.description || "",
      url: item.url || "#",
      cover_image: item.cover_image,
      published_at: item.published_at || "",
      tags: item.tags || [],
      id: item.id || item.slug || Math.random().toString(36).substr(2, 9),
    }))
    .sort(() => Math.random() - 0.5);

  return filtered;
}


export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}
