import getData from './src/helper/getData.js';
import printData from './src/helper/printData.js';
import printCar from './src/helper/printCar.js'



//EventChange on select
document.querySelector("#select").onchange = async function(){
    let category = this.value;
    
    
    const data= await getData(category);
    document.querySelector('#cards').innerHTML='';
    printData(data)
    

}


//eventMouse on button
document.querySelector('#cards').addEventListener('click',(e)=>{
    caughtEvent(e)
})

function caughtEvent(e){
    if(e.target.classList.contains('btn-dark')){
        setShopCar(e.target.parentElement)
        
    }
    e.stopPropagation();

}

//shopping car

let shopCar={};


function setShopCar(obj){
    console.log(obj);
    const product={
        id:obj.querySelector('.btn-dark').dataset.id,
        price:obj.querySelector('p').textContent,
        name:obj.querySelector('h5').innerHTML,
        quantity:1,
    }
    if(shopCar.hasOwnProperty(product.id)){
        product.quantity= shopCar[product.id].quantity+1
    }
    shopCar[product.id]={...product}
   printCar(shopCar);
}






