new Vue({
   el: '#fotos',

   template: '<div>\
                  <div :class="item.classe" v-for="item in imagens">\
                     <img class="d-block w-100" :src="item.foto" :alt="item.alt">\
                     <div class="carousel-caption d-none d-md-block">\
                        <h5>{{ item.titulo }}</h5>\
                     </div>\
                  </div>\
               </div>',

   data: function()
   {
      return {
         imagens:
         [
            {  foto: 'img/fotolab1.jpg', 
               alt: 'Primeiro slide', 
               titulo: 'LABORATÓRIO DE INFORMÁTICA',
               classe:  "carousel-item active" 
            },

            {  foto: 'img/fotolab2.jpg', 
               alt: 'Segundo slide', 
               titulo: 'LABORATÓRIO DE INFORMÁTICA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/fotolab3.jpg', 
               alt: 'Terceiro slide', 
               titulo: 'LABORATÓRIO DE INFORMÁTICA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/fotolab4.jpg', 
               alt: 'Quarto slide', 
               titulo: 'LABORATÓRIO DE INFORMÁTICA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/fotolib1.jpg', 
               alt: 'Quinto slide', 
               titulo: 'FRENTE DA BIBLIOTECA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/fotolib2.jpg', 
               alt: 'Sexto slide', 
               titulo: 'BIBLIOTECA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/fotolib3.jpg', 
               alt: 'Setimo slide', 
               titulo: 'BIBLIOTECA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/espacolib1.jpg', 
               alt: 'Oitavo slide', 
               titulo: 'ESPAÇO DA BIBLIOTECA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/espacolib2.jpg', 
               alt: 'Nono slide', 
               titulo: 'ESPAÇO DA BIBLIOTECA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/piscina1.jpg', 
               alt: 'Decimo slide', 
               titulo: 'PISCINA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/piscina2.jpg', 
               alt: 'Decimo primeiro slide', 
               titulo: 'PISCINA',
               classe:  "carousel-item" 
            },

            {  foto: 'img/piscina3.jpg', 
               alt: 'Decimo segundo slide', 
               titulo: 'PISCINA',
               classe:  "carousel-item" 
            }
         ]         
      }
   }
})