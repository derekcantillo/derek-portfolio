import { Hero, About, Projects, Experience } from 'components/sections'
import { Footer, Header, FloatingActionButton } from 'components/ui'

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Footer />
			<FloatingActionButton />
		</main>
	)
}
