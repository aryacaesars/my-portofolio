import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Sanydressline",
    description: "A full-stack E-commerce website built with Next.js",
    image: "/sany.png",
    tech: ["Next", "React", "PostgreSQL", "Tailwind", "Etc."],
    github: "https://github.com/aryacaesars/sanydressline",
    live: "https://sanydressline.my.id"
  },
{
  title: "Ciplusplus Team Picker",
  description: "A tools for my classmate to pick our team",
  image: "/ciplus.png",
  tech: ["Next.js", "Tailwind", "shadCN"],
  github: "https://github.com/aryacaesars/ciplusplus-team-picker",
  live: "https://cipluspluspicker.vercel.app/"
},
{
  title: "TransformLab",
  description: "3D modelling website using Three.js",
  image: "/3d.png",
  tech: ["HTML", "Tailwind", "Three.js"],
  github: "https://github.com/aryacaesars/Project-Aljabar.git",
  live: "https://project-aljabar.vercel.app"
}
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-20 px-8 md:px-16">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
    Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <Card key={index} className="bg-black/40 border-gray-800 hover:border-gray-700 transition-colors">
      <CardHeader>
      <img
      src={project.image}
      alt={project.title}
      className="rounded-t-lg h-48 w-full object-cover"
      />
      </CardHeader>
      <CardContent className="space-y-4">
      <CardTitle className="text-xl font-semibold text-white">
      {project.title}
      </CardTitle>
      <CardDescription className="text-gray-400">
      {project.description}
      </CardDescription>
      <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
        key={tech}
        className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
        >
        {tech}
        </span>
      ))}
      </div>
      </CardContent>
      <div className="flex gap-4 pt-4 pb-4 px-6">
      <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      >
      <Github className="w-5 h-5" />
      </a>
      <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      >
      <ExternalLink className="w-5 h-5" />
      </a>
      </div>
      </Card>
    ))}
    </div>
    <button className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white font-semibold py-2 px-4 rounded-lg mt-8 block mx-auto">
    <a
    href="https://github.com/aryacaesars"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
    >
    View More on GitHub
    </a>
    </button>

    </div>
    </section>
  )
}
