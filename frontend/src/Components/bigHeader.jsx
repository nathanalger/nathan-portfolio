import './CSS/Headers.css';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';

const BigHeader = ({ children }) => {

    var desktop = "" + useIsDesktop().type;

    return (
        <div className={"big-header " + desktop}>
            { children }
        </div>
    );

}

export default BigHeader;