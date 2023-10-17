(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  //OLD
  // class InputAttributes extends HtmlElement {
  //   constructor(public value: string, public placeholder: string, id: string) {
  //     super(id, "input");
  //   }
  // }

  //NEW
  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  //OLD
  // class InputEvents extends InputAttributes {
  //   constructor(value: string, placeholder: string, id: string) {
  //     super(value, placeholder, id);
  //   }

  //   setFocus() {}
  //   getValue() {}
  //   isActive() {}
  //   removeValue() {}
  // }

  //NEW
  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  //Mi solucion (esta mal por que se supone que era sin cambiar el nameField)
  // interface InputElementProps {
  //   id: string;
  //   type: HtmlType;
  //   value: string;
  //   placeholder: string;
  // }

  // class InputElement {
  //   public element: HtmlElement;
  //   public attributes: InputAttributes;
  //   public events: InputEvents;

  //   constructor({ id, type, value, placeholder }: InputElementProps) {
  //     this.element = new HtmlElement(id, type);
  //     this.attributes = new InputAttributes(value, placeholder);
  //     this.events = new InputEvents();
  //   }
  // }
  // const nameField = new InputElement({
  //   id: "txtName",
  //   placeholder: "Enter first name",
  //   type: "textarea",
  //   value: "Fernando",
  // });

  //Solucion de fernando
  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, "input"); //es el id que recibo en el constructor y recordar que el input lo enviabamos asi mero en la herencia
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }
  const nameField = new InputElement("Fernando", "Enter first name", "txtName");
  // const nameField = new InputEvents("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
