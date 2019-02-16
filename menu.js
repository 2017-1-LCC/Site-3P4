function menu()
{
	var bar = document.getElementById('sidebar');

   if (bar.className === 'barraLateral')
   {
      bar.className += ' responsivo';
   } else {
      bar.className = 'barraLateral';
   }
}