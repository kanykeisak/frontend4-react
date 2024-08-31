import {useEffect, useState} from "react";

export function useDebounce (value, delay = 250) {
    const [debounce, setDebounce] = useState(value)
    useEffect(() => {
        const t = setTimeout(() => {
            setDebounce(value)
        }, delay)
        return () => {
            clearTimeout(t)
        }
    }, [value, delay]);
    return debounce
}