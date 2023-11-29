import { Character } from '../user';

export class Undead extends Character {
    constructor(name, type, health, level) {
      super(name, type, health, level);
      this.attack = 25;
      this.defence = 25;
      
    }
}