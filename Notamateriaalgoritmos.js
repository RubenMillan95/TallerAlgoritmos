function CalculodeCalificaciónFinal(){
   
    let parcial_1 = parseInt(document.getElementById('parcial_1').value);
    let parcial_2 = parseInt(document.getElementById('parcial_2').value);
    let parcial_3 = parseInt(document.getElementById('parcial_3').value);
    
    

    let Examenfinal = parseInt(document.getElementById('Examenfinal').value);
    let Trabajofinal = parseInt(document.getElementById('Trabajofinal').value);
    
    let promedio_parciales= (parcial_1+parcial_2+parcial_3)/3;
    let resultado = (promedio_parciales * 0.55) + (Examenfinal * 0.3) + (Trabajofinal * 0.15);
    
    

    document.getElementById("resultado").innerHTML = `Su nota final en la materia de Algoritmos es: ${resultado.toFixed(2)}`;
    
    resultado.value= resultado;
    
}