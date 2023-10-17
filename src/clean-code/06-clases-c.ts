(() => {
  //Aplicamos el principio de responsabilidad unica en todo lo de aqui (al menos Person lo hace)
  //Priorizar la composicion frente a la herencia
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  const newPerson = new Person({
    birthDate: new Date("1994-08-15"),
    gender: "M",
    name: "Elliot",
  });

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  //Esta clase sera una composicion de las otras clases, con esto evitamos la herencia
  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  /*Ahora el objecto tiene person, settings y user,se usa el principio de 
  responsabilidad unica, por que cada clase son instancias propias.
  Al chile esto es mejor que herencias. Se pueden poner las clases en diferentes archivos pa que
  no haya tanto cochinero.
  */
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

  //puedo hacer esto:
  userSettings.user.checkCredentials();
})();
