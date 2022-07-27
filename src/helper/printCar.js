const $templateCar= document.querySelector('#template-carrito').content;
const $items= document.querySelector('#items');
const $fragment= document.createDocumentFragment();

function printCar(obj){
    $items.innerHTML=``;
    Object.values(obj).forEach(product=>{
        $templateCar.querySelector('th').textContent=product.id;
        $templateCar.querySelectorAll('td')[0].textContent=product.name;
        $templateCar.querySelectorAll('td')[1].textContent=product.quantity;
        $templateCar.querySelector('.btn-info').dataset.id=product.id;
        $templateCar.querySelector('.btn-danger').dataset.id=product.id;
        $templateCar.querySelector('span').textContent=parseInt(product.quantity)* parseFloat(product.price)
        const $clone= $templateCar.cloneNode(true);
        $fragment.appendChild($clone)
    
    })
    $items.appendChild($fragment)

    console.log(obj);
}



export default printCar;