import { Hero, About, Projects, Experience, Contact } from 'components/sections'
import { Header } from 'components/ui'

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</main>
	)
}
