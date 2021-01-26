import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    useEffect ( () => {
        getGif( category )
                .then( imgs =>{
                    setstate({
                        data: imgs,
                        loading: false
                    });
                })
    }, [category]);
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    return state;
}
