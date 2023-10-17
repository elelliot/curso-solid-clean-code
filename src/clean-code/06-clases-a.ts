(() => {
  //No se aplica el principio de responsabilidad unica en todo lo de aqui (al menos Person lo hace)
  type Gender = "M" | "F";

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthDate: Date;

    // constructor(name: string, gender: Gender, birthDate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthDate = birthDate;
    // }

    //
    //why below code is the same as above code?

    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  ////////////////////////////
  class User extends Person {
    //recibimos de la forma corta los props de clase

    private lastAccess: Date; //Como no necesitamos declararla nosotros, en lugar de ponerla en el constructor, la ponemos fuera de ahi

    constructor(
      public email: string,
      public role: string,
      //Tambien debemos poner las propiedades del padre
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate); //llamamos al constructor del padre con los parametros del padre
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  /*Esta clase no cumple con la 'responsabilidad unica' porque maneja el directorio, info de usuario y personas, 
  es muy dificil mantener esto por que al chile es un cochinero de herencias sin mencionar el llamar a los 'super'
  */
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      //A este punto ya que hueva copiar todas las props del padre (User y Person) otra vez
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "elliot@google.com",
    "Admin",
    "Elliot",
    "M",
    new Date("1994-08-15")
  );

  console.log({
    userSettings,
  });
})();

// class Persona {
//   //initialize class props
//   nombre = "";
//   codigo = "";
//   frase = "";

//   //El constructor se ejecuta cuando se crea una nueva instancia del objeto
//   constructor(nombre: string, codigo: string, frase: string) {
//     console.log("Ea Clase");

//     nombre = "aaa"; //se queda con el valor por defecto de la propiedad por que de esta forma 'nombre' no existe en este scope

//     // 'this' se usa para hacer referencia a la instancia de la clase
//     this.nombre = nombre;
//     this.codigo = codigo;
//     this.frase = frase;
//   }
// }

// const spider = new Persona("Peter", "Code", "Phrase");
// console.log(spider);
