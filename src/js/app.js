// TODO: write your code here
import sum from './basic';
import { Character } from './user';
import { Bowman } from './personages/bowman';
import { Daemon } from './personages/daemon';
import { Magician } from './personages/magician';
import { Swordsman } from './personages/swordsman';
import { Undead } from './personages/undead';
import { Zombie } from './personages/zombie';

// eslint-disable-next-line no-console
console.log('worked');
// eslint-disable-next-line no-console
console.log(sum([1, 2]));

const person = new Character('Bovan', 'Daemon', 19, 21);
const person1 = new Bowman('Ivan', 'Bowman');
const person2 = new Swordsman('Gena', 'Swordsman');
const person3 = new Zombie('Jorik', 'Zombie');
const person4 = new Daemon('Mark', 'Daemon');
const person5 = new Magician('Ulla', 'Magician');
const person6 = new Undead('Evpatiy', 'Undead');
console.log(person);
console.log(person1);
console.log(person2);
console.log(person3.levelUp());
console.log(person4.validateName('Mark', 'Daemon'));