const timeline = [
  {
    year: "2023",
    title: "Beginning My Tech Journey",
    company: "Informatics Student",
    description: "Enrolled in Informatics program and developed a strong interest in web technologies and programming.",
  },
{
  year: "2024",
  title: "Diving into Web Development",
  company: "Self-Initiated Projects",
  description: "Started building functional and visually appealing websites while exploring modern frameworks and tools.",
},
{
  year: "2025",
  title: "Exploring Collaborative Projects",
  company: "Freelance & Personal Learning",
  description: "Actively collaborating on web development projects and learning alongside peers to sharpen my skills.",
},
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative z-10 py-20 px-8 md:px-16 bg-black/20">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
    My Journey
    </h2>
    <div className="space-y-12">
    {timeline.map((item, index) => (
      <div
      key={index}
      className="flex gap-6 items-start transition-transform hover:scale-105"
      >
      <div className="flex flex-col items-center">
      <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white"></div>
      {index !== timeline.length - 1 && <div className="w-1 h-full bg-blue-400"></div>}
      </div>
      <div className="pb-12">
      <span className="text-blue-400 font-mono text-sm">{item.year}</span>
      <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
      <p className="text-gray-400 italic">{item.company}</p>
      <p className="text-gray-300 mt-2">{item.description}</p>
      </div>
      </div>
    ))}
    </div>
    </div>
    </section>
  );
}
