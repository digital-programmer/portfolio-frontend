
import { useState, useEffect } from 'react';


export default function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [setWidth, width]);

    return width <= 768;
}