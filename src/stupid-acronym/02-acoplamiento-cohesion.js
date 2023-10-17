//EVITAR Alto acoplamiento y baja cohesion

//Lo IDEAL es tener BAJO Acoplamiento y BUENA Cohesion

/*
Acoplamiento:
    *-Se refiere a cuan relacionadas o dependientes son dos clases o modulos entre si
    *-El BAJO Acoplamiento sería que el cambiar algo importante en una clase NO DEBERÍA afectar a la otra
    *-El ALTO Acoplamiento dificultaría el cambio y mantenimiento de su código, ya que las clases están muy unidas, hacer un cambio podría
    hacer un efecto dominó o incluso requerir una renovación completa del sistema

    *Debemos Evitar que nuestras clases tengan mucha relacion con otras clases y/o modulos 
    *Nuestros modulos deben enfocarse en lo que hay que hacer y cuando necesiten comunicarse o acciones con otros modulos que sea mediante un canal
    bien definido y que esas interacciones sean estrictamente necesarias

ALTO ACOPLAMIENTO
Desventajas:
    *-Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros módulos
    *-El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos
    *-Un módulo en particular puede ser mas dificil de reutilizar y/o probar por que se deben incluir módulos dependientes 


Cohesion
-La Cohesion se refiere a lo que la clase (o módulo) puede hacer
-La BAJA Cohesión significa que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer
-La ALTA Cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase
*/
