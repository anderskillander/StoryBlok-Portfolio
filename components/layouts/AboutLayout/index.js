/* styles */
import style from './index.scss';
import resets from '../DefaultLayout/styleReset.scss';

/* components */
import Head from '../../common/Head';

const AboutLayout = (props) => {
    const title = 'About Layout';
    const description = 'This is the styling for the About Page';

    return (
        <div className={(resets, style.root)}>
            <div className={style.pageWrapper}>
                <Head title={title} description={description} />
                {props.children}
            </div>
        </div>
    );
};

export default AboutLayout;
