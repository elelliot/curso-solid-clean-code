(() => {
  //No se aplica el principio de responsabilidad unica en todo lo de aqui (al menos Person lo hace)
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    //Con la Interface simplificamos los parametros del constructor desestructurando, aunque no del todo por que debemos declarar las classProps
    //no necesito este public access para instanciar esto, por que lo pondrá? igual lo dejare
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    //Constructor recibe el objeto y desestructuramos
    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  //Instanciamos la persona con un objeto de argumento
  const newPerson = new Person({
    name: "Elliot",
    gender: "M",
    birthDate: new Date("1994-08-15"),
  });

  console.log("Person: ", newPerson);
  ////////////////////////////
  //Repetimos name, gender y birthDate, (i don't like it, but wathevs), aunque sea en la interface
  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    //recordar que el lastAccess no necesito proporcionarlo desde la instancia.
    constructor({ email, role, name, gender, birthDate }: UserProps) {
      //Usamos super para agregar las propiedades del padre
      super({ name, gender, birthDate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  const newUser = new User({
    name: "ElElliot",
    gender: "M",
    birthDate: new Date("1994-08-15"),
    email: "elliot@gmail.com",
    role: "ElAdminApa",
  });
  console.log(newUser);

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "elliot@google.com",
    role: "Admin",
    name: "Elliot",
    gender: "M",
    birthDate: new Date("1994-08-15"),
  });

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
