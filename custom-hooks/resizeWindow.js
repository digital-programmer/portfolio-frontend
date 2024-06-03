
import { useState, useEffect } from 'react';


export default function useWindowResize() {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [width]);

    return width <= 768;
}