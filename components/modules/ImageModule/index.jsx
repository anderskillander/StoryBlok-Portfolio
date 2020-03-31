/* styles */
import style from './index.scss';

const ImageModule = ({ copy }) => {
    return (
        <div className={style.root}>
            <img src={copy}></img>
        </div>
    );
};

export default ImageModule;
