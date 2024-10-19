import { useState, useEffect } from 'react';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import './CSS/panels.css';
import COM from '../Components.jsx';

const PopUpPanel = ({ visible, close, content, title }) => {

    const event = new Event("pagechange");
    var desktop = "" + useIsDesktop().type;

    useEffect(() => { dispatchEvent(event) }, []);

    if (visible) {
        return (
            <>
                <div className={"panelWrapper " + desktop}>
                    <div className="panel">
                        <div className="exitBar">
                            <div onClick={ () => { close() } }>
                                <div className="closeButton">
                                    <div className="buttonContent"><b>X</b></div>
                                </div>
                            </div>

                            <div className="titleBar">
                                <COM.Text.Title>{title}</COM.Text.Title>
                            </div>

                            <div></div>
                        </div>

                        <div className="content">
                            {content}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PopUpPanel;