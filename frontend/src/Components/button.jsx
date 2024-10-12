import './CSS/Button.css'
import useIsDesktop from '../Hooks/useIsDesktop.jsx';

const Button = ({ children, onClick }) => {

    var desktop = "" + useIsDesktop().type;

    const clickUndefined = () => {
        console.log("Click event recieved, but there was no event assigned to the button.");
    };

    return (
        <button onClick={(onClick != undefined || onClick == "") ? onClick : clickUndefined} className={"bottom " + desktop}>
            <span>{children}</span>
        </button>
    );

}

export default Button;