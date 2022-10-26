const img1 = document.querySelector('#imaginea_mea_1');
const img2 = document.querySelector('#imaginea_mea_2');


img1.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'block';
})

img2.addEventListener('click', ()=> {
    img1.style.display = 'block';
    img2.style.display = 'none';
})

