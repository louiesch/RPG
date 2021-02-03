import { Hero } from './../src/js/hero.js';

describe('Hero', () => {

  test('should create a hero object with name, strength, health and magic attributes', () => {
    const hero = new Hero("Name", 10, 20, 10)
    expect(hero.name).toEqual("Name")
    expect(hero.strength).toEqual(10)
    expect(hero.health).toEqual(20)
    expect(hero.magic).toEqual(10)
  });

  // test('should correctly create a wizard object with properties of Hero class', () => {

  // })
});