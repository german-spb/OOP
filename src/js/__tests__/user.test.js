import { loadUser, Validator } from '../user';
import { httpGet } from '../http';
import { Character } from '../user';
import { Bowman } from '../personages/bowman';
// import { Daemon } from '../personages/daemon';
// import { Magician } from '../personages/magician';
// import { Swordsman } from '../personages/swordsman';
// import { Undead } from '../personages/undead';
import { Zombie } from '../personages/zombie';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('name length', () => {
  const person = new Zombie('Jorik', 'Zombie');
  const result = person.validateName('Jorik', 'Zombie');
  expect(result).toBe('Jorik');
});
test('change level', () => {
  const standart = {
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  };
  const person = new Bowman('Ivan', 'Bowman');
  const result = person.levelUp();
  expect(result).toEqual(standart);
});
test('damage', () => {
  const standart = {
    name: 'Ivan',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25
  };
  const person = new Bowman('Ivan', 'Bowman');
  const result = person.damage(50);
  expect(result).toEqual(standart);
});

