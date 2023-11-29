import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}
// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
  validateName(name, type) {
    const list = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }
    if (list.indexOf(type) === -1) {
      throw new Error('Неверный тип персонажа'); 
    }
    return name;
  } 
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
    else {
      throw new Error('Нельзя повысить левел умершего');
    }
    return this;
  }
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    else {
      throw new Error('Нельзя убить умершего');
    }
    return this;
  }
};