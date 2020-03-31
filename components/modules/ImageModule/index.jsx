/* styles */
import style from './index.scss';

const ImageModule = ({ copy }) => {
    return (
        <div className={style.root}>
            <p>{copy}</p>
        </div>
    );
};

export default ImageModule;
