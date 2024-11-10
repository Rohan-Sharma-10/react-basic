import { useEffect, useRef } from 'react'

export function usePrev(value) {
    const ref = useRef();
    console.log("Re-render happen with the new value = " + value);

    useEffect(() => {
        console.log("Updated the ref to be " + value)
        ref.current = value;
    }, [value]);

    console.log("returned has " + ref.current)
    return ref.current
}
// the return runs first then the effect gets called