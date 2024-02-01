const galo = document.getElementById('galo');
const galo2 = document.querySelector('.galo-2');



function sumirGalo() {
  galo.classList.toggle('ativo');
  galo2.classList.toggle('ativo');
}


galo.addEventListener('click', sumirGalo);

console.log(galo)



