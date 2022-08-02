$(()=>{
    //cuando hago click en el icono del sol. ejecuta la funcion y pone o quita la clase
    $('#mode-dark').on('click',function(){
      document.body.classList.toggle('dark'); 
    })
})