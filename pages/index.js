import DefaultLayout from '../components/layouts/DefaultLayout';
import Link from 'next/link'
import style from './index.scss';

/* This route gets hit by default, e.g. your-site.com */
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Anders Killander</h1>
			<ul>
				<li>
					<Link href="/welcome"><a>Welcome</a>
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
