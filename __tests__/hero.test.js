import { Hero } from './../src/js/hero.js';

describe('Hero', () => {

  test('should correctly create a hero object', () => {
    const hero = new Hero(10, 20, 10)
    expect(hero.strength).toEqual(10)
    expect(hero.health).toEqual(20)
    expect(hero.magic).toEqual(10)
  });

  // test('should correctly create a wizard object', () => {
  //   const wizard = new wizard()
  //   expect
  // })
});