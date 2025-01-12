import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
    id="home"
    className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-12"
    >
    {/* Photo Section */}
    <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
    <img
    src="/pp.jpg"
    alt="Arya Caesar"
    className="w-full h-full object-cover"
    />
    </div>

    {/* Text Content Section */}
    <div className="flex flex-col items-start max-w-2xl">
    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
    <span className="bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text">
    Arya Caesar
    </span>
    </h1>

    <div className="flex flex-wrap gap-2 mb-8">
    {["Next", "React", "MySQL", "Tailwind"].map((tech) => (
      <span
      key={tech}
      className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
      >
      {tech}
      </span>
    ))}
    </div>

    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl animate-fade-in-delay">
    An {' '}
    <span className="text-blue-400 font-bold">informatics student</span> passionate about {' '}
    <span className="text-purple-400">technological advancements</span>
    </p>

    <div className="flex gap-4 animate-fade-in-delay-2">
    <Button
    variant="default"
    className="bg-gradient-to-r from-indigo-900 to-indigo-800 hover:bg-gray-600 text-white px-8"
    asChild
    >
    <a href="#projects">View Projects</a>
    </Button>
    <Button
    variant="outline"
    className="border-gray-700 text-gray-900 hover:bg-blue-800 hover:text-gray-300"
    asChild
    >
    <a href="#contact">Contact</a>
    </Button>
    </div>
    </div>
    </section>
  );
}


