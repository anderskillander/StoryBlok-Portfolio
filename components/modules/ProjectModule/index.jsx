/* styles */
import style from './index.scss';

const ProjectModule = ({ title, image, text }) => {
    return (
        <div className={style.root}>
            <h3>{title}</h3>
            <img src={image} />
            <p>{text}</p>
        </div>
    );
};

export default ProjectModule;
