import DefaultLayout from '../components/layouts/DefaultLayout';
import Link from 'next/link'
import style from './index.scss';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Anders Killander</h1>
			<img src="https://i.imgur.com/MV270cZ.jpg"></img>
			<ul>
				<li>
					<Link href="/projects"><a>Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/about"><a>About</a></Link>
				</li>
				<li>
					<Link href="/blog"><a>Blog</a></Link>
				</li>
			</ul>
		</DefaultLayout>
	);
};

export default DefaultPage;
