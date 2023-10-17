(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  // Alto Acoplamiento

  class Person {
    constructor(
      //Si actualizamos name para que se separa con first y last, las clases que dependen de Person tendran problemas ...
      //public name: string,
      public firstName: string, //Si cambiara las posiciones de first y last name, sera dificil detectar errores en base a eso...
      public lastName: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string, //...Debemos cambiarlas en todas por que estan relacionadas (Alto acoplamiento)
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  //Ahora debemos construir el parametro de la nueva forma
  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "fernando@google.com",
    "F",
    "Fernando",
    "Herrera",
    "M",
    new Date("1985-10-21")
  );
  //   const userSettings = new UserSettings(
  //     "/urs/home",
  //     "/development",
  //     "fernando@google.com",
  //     "F",
  //     "Fernando",
  //     "M",
  //     new Date("1985-10-21")
  //   );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
