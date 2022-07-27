



async function getData(category){
    const BASE=`https://api.escuelajs.co/api/v1/categories`;
    try {
        const res=await fetch(`${BASE}/${category}/products`)
        const data= await res.json()
        return data;    
        
    } catch (error) {
        console.log(error);
        
    }
  
}  

export default getData;