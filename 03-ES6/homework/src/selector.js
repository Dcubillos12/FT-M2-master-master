var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
 if (matchFunc(startEl)) {
   resultSet.push(startEl);
 }
 for (let i = 0; i < startEl.children.length; i++) {
   let elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i])
   resultSet = resultSet.concat(elementos);
 }
 return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  //'#pagetitle' || '.image' || 'img.thumbnail' || 'div'
  // if (selector[0] === "#") return "id";
  // else if (selector[0] === ".") return "class";
  // else if (selector.split('.').length === 2) return "tag.class";
  // else return "tag";
  return selector[0] === '.' ? 'class' :
         selector[0] === '#' ? 'id' :
         selector.includes('.') ? 'tag.class' :
         'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // matchFunction = function(elementoDelDom) {
    //   if ("#"+elementoDelDom.id === selector) return true;
    //   else return false;
    // }
    matchFunction = (elementoDelDom) => `#${elementoDelDom.id}` === selector;
  } else if (selectorType === "class") {
      // matchFunction = function (elementoDelDom) {
      //   let arrayClases = elementoDelDom.classList;
      //   for (let i = 0; i < arrayClases.length; i++) {
      //     if ('.'+arrayClases[i] === selector) {
      //       return true
      //     }          
      //   }
      //   return false;
      // }
      matchFunction = (elementoDelDom)=> elementoDelDom.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
      // matchFunction = function (elementoDelDom) {      
      //     let tagClase = selector.split('.'); // dividir el selector || div.class = [div,class]
      //     let tagBuscado = tagClase[0]; //[div]
      //     let classBuscado = tagClase[1]; // [class]
          
      //     let matchFuncionTag = matchFunctionMaker(tagBuscado);
      //     let respuestaMatchFunctionTag = matchFuncionTag(elementoDelDom);
          
      //     let matchFunctionClass = matchFunctionMaker('.'+classBuscado);
      //     let repuestaMatchFuncionClass = matchFunctionClass(elementoDelDom);

      //     return respuestaMatchFunctionTag && repuestaMatchFuncionClass;
      //   }
      matchFunction = (elementoDelDom)=> matchFunctionMaker(selector.split('.')[0])(elementoDelDom) && matchFunctionMaker(`.${selector.split('.')[1]}`)(elementoDelDom);
  } else if (selectorType === "tag") {
    matchFunction = (elementoDelDom) => elementoDelDom.tagName.toLowerCase() === selector.toLowerCase();
   
  }
  return matchFunction;
  
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
