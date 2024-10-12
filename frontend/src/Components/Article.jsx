import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import './CSS/Articles.css';

const Basic = ({ children, src }) => {

    var desktop = useIsDesktop().type;

    return (
        <article className={"basic " + desktop}>
            <div id="basic_left">
                {children}
            </div>

            <div id="basic_right">
                <img src={src}></img>
            </div>
        </article>
    );

}

export default {
    "Basic": Basic
};