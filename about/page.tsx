import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Lightbulb, Paintbrush } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            AlgoArt Research
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/gallery" className="font-medium">
              Gallery
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/submit">
              <Button>Submit Artwork</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About the Research Project</h1>
              <p className="text-xl text-gray-600 mb-8">
                Exploring the intersection of human algorithm visualization and artificial intelligence art generation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              This research project aims to explore how people conceptualize and visualize algorithms, and how these
              mental models can be transformed through artificial intelligence into artistic representations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              By collecting hand-drawn algorithm visualizations from participants and transforming them using AI art
              generation, we seek to understand the relationship between human cognition, algorithmic thinking, and
              creative expression.
            </p>
            <p className="text-lg text-gray-700">
              The resulting gallery serves as both a research dataset and an artistic exploration of how we understand
              and represent computational processes.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Research Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collection</h3>
                <p className="text-gray-600">
                  Participants submit hand-drawn visualizations of algorithms along with descriptions of their thought
                  process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                <p className="text-gray-600">
                  Researchers analyze the drawings to identify patterns in how people visualize algorithmic concepts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transformation</h3>
                <p className="text-gray-600">
                  AI models transform the hand-drawn visualizations into artistic interpretations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exhibition</h3>
                <p className="text-gray-600">
                  The resulting AI artworks are categorized and displayed in our online gallery for further study.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Research Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Dr. Emily Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Dr. Emily Chen</h3>
                <p className="text-gray-600">Principal Investigator</p>
                <p className="text-gray-600 mt-2">Specializing in human-computer interaction and cognitive science.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Prof. James Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Prof. James Wilson</h3>
                <p className="text-gray-600">Co-Investigator</p>
                <p className="text-gray-600 mt-2">Expert in artificial intelligence and generative art.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Publications</h2>
            <ul className="space-y-4 mb-12">
              <li className="p-4 border rounded-lg">
                <h3 className="font-semibold">Visualizing the Invisible: Human Mental Models of Algorithms</h3>
                <p className="text-gray-600 text-sm">
                  Chen, E., Wilson, J. (2023). Journal of Computational Creativity, 15(2), 78-92.
                </p>
              </li>
              <li className="p-4 border rounded-lg">
                <h3 className="font-semibold">
                  From Hand to Machine: Transforming Algorithm Sketches with Generative AI
                </h3>
                <p className="text-gray-600 text-sm">
                  Wilson, J., Chen, E., et al. (2023). Proceedings of the International Conference on AI in Art and
                  Design, 112-125.
                </p>
              </li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Participate in Our Research</h2>
              <p className="text-gray-700 mb-6">
                We're always looking for more participants to contribute their algorithm visualizations to our research
                project. Your contribution helps us better understand how people conceptualize computational processes.
              </p>
              <Link href="/submit">
                <Button size="lg" className="gap-2">
                  Submit Your Drawing
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-gray-50">
        <div className="container text-center text-gray-600">
          <p>© {new Date().getFullYear()} AlgoArt Research Project. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
