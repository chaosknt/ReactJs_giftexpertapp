//encodeURI reemplaza los espacios por % y otras cosas
export const getGif = async( category )=> {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Bq8P64iBDcqET1jykuMgclqMmvSXCAId`;
    const result = await fetch ( url );
    const { data } = await result.json();

    
    const gifts = data.map(  img  =>
       {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
    return gifts;

}