/*
    ===== Código de TypeScript =====
*/

// Un decorador es un a funcion que expade la funcionalidad de una clase
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}
@reportableClassDecorator
class MySuperClass {
  public myProperty: string = 'ABC123';

  print() {
    console.log('Hello World!');
  }
}

console.log(MySuperClass);

const myClass = new MySuperClass();

console.log(myClass);
