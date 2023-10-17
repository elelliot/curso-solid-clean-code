class HtmlElement {
  /*
    Comenzar con la lista de propiedades de la clase
      -Primero las static props
      -Luego las publicas
      -Al final las privadas
      -Seguir las buenas practicas del lenguaje que usemos para nombrar las props
      (Ejemplo:En dart las props privadas se nombran con guion bajo al inicio)
    */
  public static domReady: boolean = false;

  private _id: string;
  private type: string;
  private updatedAt: number;

  //Luego de las props de la clase, vienen los metodos
  /*
    1-Primero los constructores estaticos
       **createInput en realidad es un metodo estatico pero se considera constructor por que regresa
       una nueva instancia de la clase
    2-Luego el Constructor normal
    3-El ultimo tipo de constructor seran los privados (en algunos casos/lenguajes se usan)
    */
  static createInput(id: string) {
    return new HtmlElement(id, "input");
  }

  constructor(id: string, type: string) {
    this._id = id;
    this.type = type;
    this.updatedAt = Date.now();
  }
  /*
    Despues de los constructores
    4-Metodos estaticos (ya sin ser constructor como en el createInput)
    5-Metodos Privados 
    6-El resto de los metodos de instancia ordenados de mayor a menor importancia
    7-getters y setters
    */
  setType(type: string) {
    this.type = type;
    this.updatedAt = Date.now();
  }

  get id(): string {
    return this.id;
  }
}
