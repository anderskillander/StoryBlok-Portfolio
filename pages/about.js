import DefaultLayout from '../components/layouts/DefaultLayout';
import ImageModule from '../components/modules/ImageModule'

function fetchUrl(url) {
    return fetch(url).then(r => r.json());
}

const AboutPage = ({ data }) => {
    const { content } = data;

    const imageModuleData = content.body.find((item) => item.component == 'Image Module');

    return (
        <DefaultLayout>
            <h1>About Page</h1>
            {imageModuleData ? (
                <ImageModule copy={imageModuleData.copy} image={imageModuleData.image} />) : null}

        </DefaultLayout>
    );
};


AboutPage.getInitialProps = async ({ query }) => {
    /* {query} is an object we receive within this method from Next,
      so that we can retrieve the slug (e.g. '/welcome') coming with the route */
    const { page } = query;
    /* Calling our internal api endpoint so that we can fetch Storyblok content
      server-side (we are on client-side here) */
    const data = await fetchUrl(`https://andy-portfolio.now.sh/api/page/about`);
    /* Returning the data back into SlugPage as props */
    return { data }; /* This is the same as { data: data } */
};

export default AboutPage;
