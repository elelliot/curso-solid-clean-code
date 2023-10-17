(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  //Aqui hacemos el mismo rework de first y last name
  interface PersonProps {
    firstName: string;
    lastName: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    //Al desestructurar del objeto da igual donde esten posicionados en la clase e interfaz
    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  //Aqui hay bajo acoplamiento con Person asi que no hay que hacer nada
  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  //Igual bajo acoplamiento con la clase de Person
  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  //Aqui si hay acoplamiento asi que cambiamos...
  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    firstName: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      this.person = new Person({ firstName, lastName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  //Implementamos la nueva forma
  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastFolderOpen: "/home",
    firstName: "Fernando",
    lastName: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
