import { useEffect, useState } from 'react';

const useIsDesktop = (breakpoint = 800) => {
    const checkForDevice = () => window.innerWidth < breakpoint;

    const [isDesktop, setIsDesktop] = useState(checkForDevice());
    
    useEffect(() => {
        const handlePageResized = () => {
            setIsDesktop(!checkForDevice());
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handlePageResized);
            window.addEventListener('pagechange', handlePageResized);
            window.addEventListener('orientationchange', handlePageResized);
            window.addEventListener('load', handlePageResized);
            window.addEventListener('reload', handlePageResized);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handlePageResized);
                window.removeEventListener('orientationchange', handlePageResized);
                window.removeEventListener('load', handlePageResized);
                window.removeEventListener('reload', handlePageResized);
            }
        };
    }, []);

    return {
        isDesktop,
        "type": (isDesktop) ? "desktop" : "mobile",
    };
};

export default useIsDesktop;