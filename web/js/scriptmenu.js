document.getElementById('fas-user').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('sidebar').style.right = '0';
});


document.getElementById('closeButton').addEventListener('click', function () {
  document.getElementById('sidebar').style.right = '-250px';
});

function scrollToFooter() {
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
}


/**************************/
let products = {
  data: [
    /**formal */
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m1.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h1.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m2.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h2.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m3.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h3.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m4.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h4.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m5.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h5.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m6.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h6.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m7.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h7.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m8.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h8.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m9.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h9.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m10.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h10.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m11.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h11.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m12.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h12.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m13.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h13.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m14.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h14.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-m15.png",
      gender: "mujer",
      phrase: "Confort en cada paso",
    },
    {
      productName: "Sugerencia Formal",
      category: "Formal",
      image: "/img/outfits/formal-h15.png",
      gender: "hombre",
      phrase: "Confort en cada paso",
    },
    
    /** informal */
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m1.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h1.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m2.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h2.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m3.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h3.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m4.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h4.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m5.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h5.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m6.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h6.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m7.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h7.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m8.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h8.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m9.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h9.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m10.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h10.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m11.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h11.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m12.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h12.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m13.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h13.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m14.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h14.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-m15.png",
      gender: "mujer",
      phrase: "Estilo y comodidad",
    },
    {
      productName: "Sugerencia Informal",
      category: "Informal",
      image: "/img/outfits/informal-h15.png",
      gender: "hombre",
      phrase: "Estilo y comodidad",
    },
  

    /** sol */
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m1.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h1.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m2.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h2.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m3.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h3.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m4.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h4.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m5.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h5.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m6.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h6.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m7.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h7.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m8.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h8.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m9.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h9.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m10.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h10.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m11.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h11.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m12.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h12.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m13.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h13.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m14.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h14.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-m15.png",
      gender: "mujer",
      phrase: "Elegancia en cada puntada",
    },
    {
      productName: "Sugerencia Soleado",
      category: "Soleado",
      image: "/img/outfits/sol-h15.png",
      gender: "hombre",
      phrase: "Elegancia en cada puntada",
    },


/** frio */
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m1.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h1.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m2.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h2.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m3.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h3.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m4.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h4.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m5.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h5.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m6.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h6.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m7.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h7.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m8.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h8.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m9.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h9.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m10.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h10.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m11.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h11.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m12.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h12.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m13.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h13.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m14.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h14.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-m15.png",
      gender: "mujer",
      phrase: "Protección contra el frío",
    },
    {
      productName: "Sugerencia Lluvioso o Frio",
      category: "Frio",
      image: "/img/outfits/frio-h15.png",
      gender: "hombre",
      phrase: "Protección contra el frío",
    },
  ],
};


// Código para crear las tarjetas de producto
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category.toLowerCase(), i.gender);

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let img = document.createElement("img");
  img.setAttribute("src", i.image);
  imgContainer.appendChild(img);

  let heartDiv = document.createElement("div");
  heartDiv.classList.add("heart");

  let circle = document.createElement("span");
  circle.classList.add("circle");
  heartDiv.appendChild(circle);

  heartDiv.onclick = () => {
    if (!heartDiv.classList.contains("forward")) {
      heartDiv.classList.add("forward");
      heartDiv.classList.remove("reverse");
      toggleFavorite(i.image, true);
    } else {
      heartDiv.classList.add("reverse");
      heartDiv.classList.remove("forward");
      toggleFavorite(i.image, false);
    }
  };

  imgContainer.appendChild(heartDiv);

  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let phrase = document.createElement("h6");
  phrase.classList.add("product-phrase");
  phrase.innerText = i.phrase;
  container.appendChild(phrase);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

window.onload = () => {
  applyFilters();
  loadFavorites();
  toggleButtons(); // Asegura que los botones estén correctamente ocultos al cargar la página
};

function toggleCategory(category) {
  let buttons;
  if (category === 'clima') {
    buttons = document.querySelectorAll('.clima-button');
  } else if (category === 'evento') {
    buttons = document.querySelectorAll('.evento-button');
  }

  buttons.forEach((button) => {
    if (button.style.display === 'none' || button.style.display === '') {
      button.style.display = 'inline-block';
    } else {
      button.style.display = 'none';
    }
  });
}

function toggleFavorite(imgSrc, isFavorite) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (isFavorite) {
    if (!favorites.includes(imgSrc)) {
      favorites.push(imgSrc);
    }
  } else {
    favorites = favorites.filter(src => src !== imgSrc);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    const img = heart.closest(".image-container").querySelector("img");
    if (img) {
      const src = img.getAttribute("src");
      if (favorites.includes(src)) {
        heart.classList.add("forward");
        heart.classList.remove("reverse");
      } else {
        heart.classList.add("reverse");
        heart.classList.remove("forward");
      }
    }
  });
}

function applyFilters() {
  let isHombreChecked = document.getElementById("hombre-checkbox").checked;
  let isMujerChecked = document.getElementById("mujer-checkbox").checked;
  let isClimaChecked = document.getElementById("clima-checkbox").checked;
  let isEventoChecked = document.getElementById("evento-checkbox").checked;

  let activeCategory = document.querySelector(".button-value.active");
  let categoryFilter = activeCategory ? activeCategory.innerText.toLowerCase() : "Todo";

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let showCard = true;

    if (isHombreChecked && !card.classList.contains("hombre")) {
      showCard = false;
    }

    if (isMujerChecked && !card.classList.contains("mujer")) {
      showCard = false;
    }

    if (!isHombreChecked && !isMujerChecked) {
      showCard = true;
    }

    if (isClimaChecked && !["soleado", "frio"].includes(card.classList[1])) {
      showCard = false;
    }

    if (isEventoChecked && !["informal", "formal"].includes(card.classList[1])) {
      showCard = false;
    }

    if (categoryFilter !== "todo" && !card.classList.contains(categoryFilter)) {
      showCard = false;
    }

    if (showCard) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

function toggleButtons() {
  let isClimaChecked = document.getElementById("clima-checkbox").checked;
  let isEventoChecked = document.getElementById("evento-checkbox").checked;

  let climaButtons = document.querySelectorAll('.clima-button');
  let eventoButtons = document.querySelectorAll('.evento-button');

  if (isClimaChecked && isEventoChecked) {
    showMessage("No se pueden activar las dos categorías al mismo tiempo");
    document.getElementById("evento-checkbox").checked = false;
    isEventoChecked = false;
  }

  if (isClimaChecked) {
    climaButtons.forEach(button => button.style.display = 'inline-block');
    eventoButtons.forEach(button => button.style.display = 'none');
  } else if (isEventoChecked) {
    eventoButtons.forEach(button => button.style.display = 'inline-block');
    climaButtons.forEach(button => button.style.display = 'none');
  } else {
    climaButtons.forEach(button => button.style.display = 'none');
    eventoButtons.forEach(button => button.style.display = 'none');
  }
}

// Eventos para checkboxes de categoría
document.getElementById("clima-checkbox").addEventListener("change", () => {
  let isClimaChecked = document.getElementById("clima-checkbox").checked;
  let isEventoChecked = document.getElementById("evento-checkbox").checked;

  if (isClimaChecked && isEventoChecked) {
    document.getElementById("evento-checkbox").checked = false;
    showMessage("Solo se puede activar una categoría a la vez");
  } else if (isClimaChecked) {
    document.getElementById("evento-checkbox").checked = false;
  }

  toggleButtons();
  applyFilters();
});

document.getElementById("evento-checkbox").addEventListener("change", () => {
  let isClimaChecked = document.getElementById("clima-checkbox").checked;
  let isEventoChecked = document.getElementById("evento-checkbox").checked;

  if (isClimaChecked && isEventoChecked) {
    document.getElementById("clima-checkbox").checked = false;
    showMessage("Solo se puede activar una categoría a la vez");
  } else if (isEventoChecked) {
    document.getElementById("clima-checkbox").checked = false;
  }

  toggleButtons();
  applyFilters();
});


let categoryButtons = document.querySelectorAll(".button-value");
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilters();
  });
});

document.getElementById("hombre-checkbox").addEventListener("change", () => {
  let isHombreChecked = document.getElementById("hombre-checkbox").checked;
  let isMujerChecked = document.getElementById("mujer-checkbox").checked;

  if (isHombreChecked && isMujerChecked) {
    document.getElementById("mujer-checkbox").checked = false;
    showMessage("Solo se puede activar un género a la vez");
  }

  applyFilters();
});

document.getElementById("mujer-checkbox").addEventListener("change", () => {
  let isHombreChecked = document.getElementById("hombre-checkbox").checked;
  let isMujerChecked = document.getElementById("mujer-checkbox").checked;

  if (isHombreChecked && isMujerChecked) {
    document.getElementById("hombre-checkbox").checked = false;
    showMessage("Solo se puede activar un género a la vez");
  }

  applyFilters();
});

function showMessage(message) {
  const messageBox = document.getElementById("message-box");
  messageBox.innerText = message;
  messageBox.style.display = "block";
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}





// Search button click
document.getElementById("search").addEventListener("click", () => {
  // initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // loop through all elements
  elements.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // display matching card
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
});
