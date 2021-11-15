/*
    ===== Código de TypeScript =====
*/

let habilities: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  habilities: string[];
  hometown?: string;
}

const character: Character = {
  name: 'Strider',
  hp: 100,
  habilities: ['Bash', 'Counter', 'Healing'],
};

character.hometown = 'Miami';

console.table(character);
