import Link from "next/link";
import s from "./Home.module.scss";

const Home = () => {
	return (
		<div className={s._Wrapper}>
			<div className={s._Container}>
				<h1>MadeIndonesia Next.js Boilerplate</h1>
				<br />
				<br />
				<p>
					This boilerplate made for MadeIndonesia developers especially those who use{" "}
					<Link href={"https://nextjs.org/"}>Next.js</Link> as their framework. We have created a
					structure that suits our needs to boost our productivity and improve developer experience.
				</p>
				<br />
				<br />
				<p>We never stop doing research on how to improve this boilerplate.</p>
				<br />
				<br />
				<h2>What&apos;s in This Boilerplate?</h2>
				<br />
				<br />
				<p>
					<ul>
						<li>Well structured working directory ✅</li>
						<li>
							Pre configured Redux Toolkit ✅{" "}
							<strong>(Remove if you don&apos;t feel like using it)</strong>
						</li>
						<li>Abstracted axios config ✅</li>
						<li>Useful utilities ✅</li>
						<li>Atomic design ✅</li>
						<li>Preconfigured husky, lint-staged, eslint, prettier, snippets ✅</li>
						<li>Upgradable to Next 13 app directory ✅</li>
						<li>Minimal dependencies ✅</li>
					</ul>
				</p>
				<br />
				<br />
				<h2>Tech Stacks</h2>
				<br />
				<br />
				<p>
					<ul>
						<li>Next.js</li>
						<li>Typescript</li>
						<li>Axios</li>
						<li>Redux Toolkit</li>
					</ul>
				</p>
				<br />
				<br />
				<div className={s._Links}>
					<Link href="https://madeindonesia.com" target="_blank">
						<p>Our website</p>
					</Link>
					<Link href="https://careers.madeindonesia.com" target="_blank">
						<p>Careers</p>
					</Link>
					<Link href="https://guide.madeindonesia.com" target="_blank">
						<p>Documentation</p>
					</Link>
					<Link href="https://github.com/mdidn" target="_blank">
						<p>GitHub</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
