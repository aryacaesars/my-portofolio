const tools = [
  { name: "React", image: "/images/React.png" },
{ name: "Next", image: "/images/Next.png" },
{ name: "MySQL", image: "/images/mysql.png" },
{ name: "Tailwind", image: "/images/Tailwind.png" },
{ name: "GitHub", image: "/images/git.png" },
{ name: "VS Code", image: "/images/vscode.png" },
{ name: "GPT", image: "/images/GPT.png" },
{ name: "V0", image: "/images/V0.png" }
];

export default function ToolsSection() {
  return (
    <section id="tools" className="relative z-10 py-20 px-8 md:px-16 bg-black/20">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
    Tools & Technologies
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
    {tools.map((tool) => (
      <div
      key={tool.name}
      className="bg-black/60 border border-gray-800 rounded-lg p-6 text-center hover:border-gray-700 transition-colors"
      >
      <img
      src={tool.image}
      alt={tool.name}
      className="w-16 h-16 mb-4 mx-auto object-contain"
      />
      <span className="text-gray-300 text-sm">{tool.name}</span>
      </div>
    ))}
    </div>
    </div>
    </section>
  );
}
