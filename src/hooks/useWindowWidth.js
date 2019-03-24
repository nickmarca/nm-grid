import {useState, useEffect} from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const listener = () => setWidth(window.innerWidth);

        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [width]);

    return width;
}

export default useWindowWidth;