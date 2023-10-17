//En este folder  hay puro codesmell, y se trata de ver que NO hay que hacer/usar

//Tratar de no usar el patron singleton
/*
1-Son muy dificiles de probar
2-No se pueden rastrear de donde vienen los cambios
3-Vive en el contexto global
4-Puede ser modificado por cualquiera y en cualquier momento
*/
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object("I am the instance");
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("Misma instancia? ", instance1 === instance2);
}

main();
