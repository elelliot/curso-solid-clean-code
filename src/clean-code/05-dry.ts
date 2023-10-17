type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    //Aplicando DRY, hacemos in for in para recorrer el this y de paso movemos la validacion a este metodo por si se debe reutilizar
    for (const key in this) {
      // console.log(key, typeof this[key]);

      //switch para evaluar el tipo de key del 'this', asi no debo evaluar mas de 1 diferente string, number, etc. Los evaluamos juntos
      switch (typeof this[key]) {
        case "string":
          //this[key].length da error por que length no se puede saber si sera string, asi que lo casteamos
          if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>this[key] <= 0) throw Error(`${key} is Zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not supported`);
      }
    }
    //si llegamos a este punto es que paso las validaciones, por tanto regresa true
    return true;
  }

  toString() {
    //Como las props de clase son opcionales, las pasamos por validaciones para mostrar mensaje de error
    //El problema es que estamos duplicando codigo con cada propiedad que agregamos y la idea es que este metodo solo retorne lo que necesitamos

    //Aqui no se aplica el DRY (Don't repeat yourself)
    // if (this.name.length <= 0) throw Error("Name is empty");
    // if (this.price <= 0) throw Error("Price is Zero");
    // if (this.size.length <= 0) throw Error("Size is empty");

    //usamos el metodo
    //Con esto  no hay duplicidad, y toString() hace lo que debe de hacer , no debe hacer evaluaciones por eso lo movimos
    if (!this.isProductReady) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 10, "XL");
  console.log(bluePants.toString());
})();
