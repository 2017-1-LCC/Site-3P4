function mudaClasse()
{
   const navs = document.querySelectorAll('.barraNav_itens');

   navs.forEach(nav => nav.classList.toggle('barraNav_show'));
}

document.querySelector('.barraNav_link-botao').addEventListener('click', mudaClasse);