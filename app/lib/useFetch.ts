
export const useFetch = async()=>{
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');

       if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
       }

       const data = await response.json();
       return data;

    }catch(err){
        console.log('Error fetching posts data', err);
        return []
    }
    
}







