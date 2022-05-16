elemento  var =  0 ;

const  peliculas  =  documento . querySelectorAll ( '.pelicula' ) ;

const  fila  =  documento . querySelector ( '.contenedor-carrusel' ) ;
const  fila2  =  documento . querySelector ( '.contenedor-carrusel2' ) ;


const  flechaIzquierda  =  documento . getElementById ( 'flecha-izquierda' ) ;
const  flechaDerecha  =  documento . getElementById ( 'flecha-derecha' ) ;

const  flechaIzquierda2  =  documento . getElementById ( 'flecha-izquierda2' ) ;
const  flechaDerecha2  =  documento . getElementById ( 'flecha-derecha2' ) ;

flechaIzquierda . addEventListener ( 'clic' ,  ( )  =>  {
  pasar ( 1 )
} ) ;
flechaDerecha . addEventListener ( 'clic' ,  ( )  =>  {
  pasar ( 2 )
} ) ;



flechaIzquierda2 . addEventListener ( 'clic' ,  ( )  =>  {
  pasar ( 3 )
} ) ;
flechaDerecha2 . addEventListener ( 'clic' ,  ( )  =>  {
  pasar ( 4 )
} ) ;



función  pasar ( n )  {
  si  ( norte  ==  1 )  {
    fila _ scrollLeft  -=  fila . ancho de desplazamiento ;

  }  más  si  ( n  ==  2 )  {

    fila _ scrollLeft  +=  fila . ancho de desplazamiento ;

  }  más  si  ( n  ==  3 )  {
    Fila2 . scrollLeft  -=  fila . ancho de desplazamiento ;
  }  más  si  ( n  ==  4 )  {
    Fila2 . scrollLeft  +=  fila . ancho de desplazamiento ;
  }
}


// trabajando con el hover

peliculas_paraCada ( ( pelicula )  =>  {
  pelicula _ addEventListener ( 'mouseenter' ,  ( e )  =>  {
    const  elemento  =  e . objetivo actual ;
    establecerTiempo de espera ( ( )  =>  {
      peliculas _ forEach ( pelicula  =>  pelicula . classList . remove ( 'hover' ) ) ;
      elemento _ listaclases . añadir ( 'pasar el cursor' ) ;

    } ,  300 ) ;

  } )
} ) ;

fila _ addEventListener ( 'mouseleave' ,  ( )  =>  {
  peliculas _ forEach ( pelicula  =>  pelicula . classList . remove ( 'hover' ) ) ;
} ) ;

Fila2 . addEventListener ( 'mouseleave' ,  ( )  =>  {
  peliculas _ forEach ( pelicula  =>  pelicula . classList . remove ( 'hover' ) ) ;
} ) ; 