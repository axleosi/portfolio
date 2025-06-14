import ProjectList from "./components/ProjectList";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-2">
      <Hero/>
      <ProjectList />
    </main>
  );
}
