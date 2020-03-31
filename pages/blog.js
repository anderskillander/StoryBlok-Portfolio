import DefaultLayout from '../components/layouts/DefaultLayout';


/* This route gets hit by default, e.g. your-site.com */
const BlogPage = () => {
    return (
        <DefaultLayout>
            <h1>Blog page!</h1>
        </DefaultLayout>
    );
};

export default BlogPage;
