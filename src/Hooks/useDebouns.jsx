import { useState, useRef, useEffect } from "react";

const useDebouns = (callback, delay) => {

    const timeoutRef = useRef(null)
    useEffect(()=>{
        return () => {
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current)
            }
        };
    }, []);

    const debounsCallback = (...args) => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        };
        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay);
    };
    return debounsCallback;
};

export default useDebouns;