import { Hero } from './../src/js/hero.js';

describe('Hero', () => {

  test('should create a hero object with name, strength and health attributes', () => {
    const hero = new Hero("Name", 10, 20)
    expect(hero.name).toEqual("Name")
    expect(hero.strength).toEqual(10)
    expect(hero.health).toEqual(20)
  });
});