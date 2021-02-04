import { Hero } from './../src/js/hero.js';

describe('Hero', () => {

  test('should correctly create a hero object', () => {
    const hero = new Hero();
    expect(hero).toBeInstanceOf(Hero);
  });

  // test('should correctly create a wizard object', () => {
  //   const wizard = new Wizard("Wendy")
  //   expect(wizard.name).toEqual("Wendy")
  // })
});