import { useState, useEffect } from 'react';
import Pages from "./Pages.jsx";
import COM from "./Components.jsx";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Colors.css'
import './App.css';
import PopupPanel from './Components/panel.jsx';

function App() {
    const [count, setCount] = useState(0)
    const [view, setView] = useState(true);

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(() => { });
    const [popupTitle, setPopupTitle] = useState("");

    // Body = const function. like () => { ... }
    const openPopup = (title, body) => {
        setPopupContent(body);
        setPopupOpen(true);
        if (typeof title === 'string' || title instanceof String) {
            setPopupTitle(title);
        }
    }

    const closePopup = () => {
        setPopupOpen(false);
        setPopupContent(() => { });
    }

    // MAKE LOADING SCREEN !!!!
    return (
        <>
            <BrowserRouter>
                <PopupPanel visible={popupOpen} close={closePopup} content={popupContent} title={popupTitle} />
                <COM.Navbar />
                <AnimatePresence mode='wait'>
                    <COM.PageWrapper>
                        <Routes>
                            <Route index element={<Pages.Home />} />
                            <Route path="/home" element={<Pages.Home />} />
                            <Route path="/contact" element={<Pages.Contact open={openPopup} />} />

                            <Route path="/account" element={<Pages.Account open={openPopup} />}  />

                            <Route path="/more" element={<Pages.More />} />
                                <Route path="/more/portfolio" element={<Pages.Portfolio />} />
                        </Routes>
                    </COM.PageWrapper>
                </AnimatePresence>
            </BrowserRouter>
        </>
    )
}

export default App
