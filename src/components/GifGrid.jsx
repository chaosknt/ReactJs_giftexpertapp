import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    
    /*const [images, setImages] = useState([])

    useEffect( () =>{
     getGif( category )
        .then ( setImages );   
     //.then( imgs => setImages ( imgs ) ) forma larga de escribir el then
    }, [ category ]);
*/
    const {data:images, loading} = useFetchGifs( category );
    //console.log(state)
    

    return (
        <>
        <h3>{ category }</h3>
        {loading && <p>Loading...</p>}
        <div className='card-grid'>
            {
                images.map( ( img ) =>(
                   <GifGridItem 
                        key = {img.id}
                        {...img} //estoy mandando cada 
                                //una de las propiedades de las imagenes como una
                                // propiedad independiente
                   />
                ))
            }
        </div>
        </>
    )
}
