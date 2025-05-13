import { Hero, About, Projects, Experience, Contact } from 'components/sections'

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</main>
	)
}
