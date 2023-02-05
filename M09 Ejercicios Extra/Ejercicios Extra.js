/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // var newArray = Object.entries(objeto);
   // return newArray;
   var newArray = [];
   var elemento;
   for(let prop in objeto){
      elemento = new Array(prop, objeto[prop]);
      newArray.push(elemento);
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const repeticiones = {};
   var cadenaTransformada = []
   for(let l of string){
      cadenaTransformada.push(l);
   }
   cadenaTransformada.forEach(element => {
      repeticiones[element] = (repeticiones[element] || 0) +1;
   });
   return repeticiones;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperRgx = /[A-Z]/g;
   let upperLetters = string.match(upperRgx);
   for(let i=0; i < upperLetters.length;i++) {
     let indx = string.indexOf(upperLetters[i]);
     string = string.substring(0,indx)+string.substring(indx+1,string.length);
   }
   string = upperLetters.join("")+string;
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var espejo = "";
   for(let i = frase.length-1; i>=0; i--){
      espejo +=frase[i];
   }
   return espejo.split(" ").reverse().join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if(numero.toString().split("").reverse().join("") === numero.toString()){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const regex = /[abc]/g;
   return string.replaceAll(regex,"");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a,b){
      if(a.length < b.length){
         return -1;
      }
      if(a.length > b.length){
         return 1;
      }else{
         return 0;
      }
   });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayResult = [];
   for(var i in array1){
      for(var j in array2){
         if(array1[i] === array2[j]){
            arrayResult.push(array1[i]);
         }
      }
   }
   return arrayResult;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
