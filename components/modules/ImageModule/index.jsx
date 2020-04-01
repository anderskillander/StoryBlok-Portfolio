/* styles */
import style from './index.scss';

const ImageModule = ({ image, copy }) => {
    return (
        <div className={style.root}>
            <img src={image} />
            <p>{copy}</p>
        </div>
    );
};

export default ImageModule;
