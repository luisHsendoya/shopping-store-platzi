const $cards= document.querySelector('#cards')
const $templateCard=document.querySelector('#template-card').content
const $fragment= document.createDocumentFragment()

function printData(data){
    data.forEach(producto=>{
        $templateCard.querySelector('h5').textContent=producto.title;
        $templateCard.querySelector('p').textContent=`${producto.price}`;
        $templateCard.querySelector('img').setAttribute('src',producto.images[0])
        $templateCard.querySelector('img').style.width=200;
        $templateCard.querySelector('.btn-dark').dataset.id=producto.id
        const $clone= $templateCard.cloneNode(true);
        $fragment.appendChild($clone)
    })

    $cards.appendChild($fragment)



}

export default printData;