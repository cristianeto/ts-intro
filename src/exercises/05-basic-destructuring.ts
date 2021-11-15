/*
    ===== Código de TypeScript =====
*/
interface Player {
  volumen: number;
  second: number;
  song: string;
  details: {
    author: string;
    year: number;
  };
}

const player: Player = {
  volumen: 50,
  second: 46,
  song: 'The Reason',
  details: {
    author: 'Hoobastank',
    year: 2001,
  },
};

const {
  volumen,
  second,
  song,
  details,
  //   details: { author: authorDetails },
} = player;

const { author } = details;
/* console.log('The volumen is: ', volumen);
console.log('The second is: ', second);
console.log('The song is: ', song);
console.log('The author is: ', author); */

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks', 'Gohan'];

const [p1, p2, p3] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
