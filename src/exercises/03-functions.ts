/*
    ===== Código de TypeScript =====
*/
function sum(a: number, b: number): number {
  return a + b;
}

const arrowSum = (a: number, b: number): number => {
  return a + b;
};

function multiply(number: number, other?: number, base: number = 2): number {
  return number * base;
}

/*const result1 = multiply(10, 3); //excepected 20
const result2 = multiply(10); //excepected 20
const result3 = multiply(10, 2, 3); //excepected 30

console.log(result1);
console.log(result2);
console.log(result3);
*/

interface CharacterLOR {
  name: string;
  hp: number;
  showHP: () => void;
}

function cureHP(character: CharacterLOR, hpX: number): void {
  character.hp += hpX;
}

const characterLOR: CharacterLOR = {
  name: 'Frodo',
  hp: 50,
  showHP() {
    console.log('healt points: ', this.hp);
  },
};

cureHP(characterLOR, 30);

characterLOR.showHP();
