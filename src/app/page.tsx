import { Hero } from "@/components/Hero";
import Cards from "@/components/Cards";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <section className="mx-auto max-w-5xl px-6 py-5">
        <Hero
          title="Project Overview"
          description="
          This project examines how teachers and students can use interview simulators, which utilize large language models, 
          both as a part of teacher education coursework and view students as active participants in technological use."
        />
        <Cards />
        <Footer />
      </section>

    </main>
  );
}
