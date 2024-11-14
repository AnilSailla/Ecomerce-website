// for single product page
const productImg=document.getElementById('productImg')
const smallImg=document.getElementsByClassName('small-img');

for(let i=0;i<4;i++)
{
    smallImg[i].addEventListener('click',()=>{
        productImg.src=smallImg[i].src;
    })

}