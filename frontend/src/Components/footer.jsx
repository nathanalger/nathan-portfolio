import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import './CSS/Headers.css';
import COM from "../Components.jsx";

const Footer = ({ children, props }) => {

    var desktop = useIsDesktop().type;
    var lh = '0.8';

    return (
        <div className={"footer " + desktop} style={{ userSelect: 'text' }}>
            <div>
                <COM.Text.Standard style={{ fontSize: '17px', lineHeight: lh }}><b>NATHAN ALGER</b></COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}>B.S. Computer Engineering</COM.Text.Standard>
                <hr />
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}>(810) 513-6688</COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}>nalger@mtu.edu</COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}>nathanalger.com</COM.Text.Standard>
            </div>

            <div>
                <COM.Text.Standard style={{ fontSize: '17px', lineHeight: lh }}><b>SOCIALS</b></COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}>Click below to see more!</COM.Text.Standard>
                <hr />
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}><COM.Text.InlineIcon src="/location.svg" size="12px" /> <a href="https://www.linkedin.com/in/nathanalger/">LinkedIn</a></COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}><COM.Text.InlineIcon src="/location.svg" size="12px" /> <a href="https://www.facebook.com/nathanaalger/">Facebook</a></COM.Text.Standard>
                <COM.Text.Standard style={{ fontFamily: 'Gowun Batang', lineHeight: lh }}><COM.Text.InlineIcon src="/location.svg" size="12px" /> <a href="https://x.com/nathaniel_alger/">X</a></COM.Text.Standard>
            </div>
        </div>
    );

}

export default Footer;