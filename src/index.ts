/*
    ===== Código de TypeScript =====
*/

class Hero {
  /*? Por defecto si un atributo no tiene public private, o static los atributos son considerados publicos  */
  // alterEgo: string;
  // age: number;
  // realName: string;

  /* Crear atributos de la clase directamente en el constructor */
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {}
}

const ironMan = new Hero('Ironman', 35, 'Tony Stark');

console.log(ironMan);
