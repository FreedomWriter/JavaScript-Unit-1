/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }//Key value pairs
    destroy() {
        return `${this.name} was removed from the game.`;
    };//Destroy
}//Game Object
  
 
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
class CharacterStats extends GameObject {
    constructor(charAttr) {
        super(charAttr);
        this.healthPoints = charAttr.healthPoints;
    } 
   //CharacterStats
  
   takeDamage() {
       return `${this.name} took damage.`;
    }
}
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  class Humanoid extends CharacterStats {
    constructor(humAttr) {
        super(humAttr);
        this.team = humAttr.team;
        this.weapons = humAttr.weapons;
        this.language = humAttr.language;
  }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // Stretch task: 
  
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  
    class Hero extends Humanoid {
        constructor(heroAttr) {
            super(heroAttr);
            this.superPower = heroAttr.superPower;
            this.home = heroAttr.home;
        }

        debug(Villian) {
          function attack(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        } 
          let hpLost = attack(0, 5);
          Villian.healthPoints = Villian.healthPoints - hpLost;
          Villian.healthPoints <= 0 ? console.log(`${Villian.takeDamage()} ${this.name} uses ${this.weapons[1]}. ${Villian.name} has been defeated! Long live Freedom! ${Villian.destroy()}`) :
            console.log(`${this.name} uses ${this.weapons[1]}. ${Villian.takeDamage()} ${Villian.name}loses ${hpLost} HP. ${Villian.name} only has ${Villian.healthPoints} HP left!`);
        }//debug

        con(Villian) {
          function attack(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        } 
          let hpLost = attack(0, 5);
          Villian.healthPoints = Villian.healthPoints - hpLost;
          Villian.healthPoints <= 0 ? console.log(`${Villian.takeDamage()} ${this.name} uses ${this.weapons[0]}. ${Villian.name} has been defeated! Long live Freedom! ${Villian.destroy()}`) :
            console.log(`${this.name} uses ${this.weapons[0]}. ${Villian.takeDamage()} ${Villian.name}loses ${hpLost} HP. ${Villian.name} only has ${Villian.healthPoints} HP left!`);
        };//con
    }//hero
    
  
    class Villian extends Humanoid {
      constructor(vilAttr){ 
          super(vilAttr);
            this.superPower = vilAttr.superPower;
            this.home = vilAttr.home;
        }

        disappear(Hero) {
          function attack(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        } 
          let hpLost = attack(0, 5);
          Hero.healthPoints = Hero.healthPoints - hpLost;
          Hero.healthPoints <= 0 ? 
          console.log(`${Hero.takeDamage()} ${this.name} uses ${this.weapons[0]}. ${Hero.name} has been defeated! Chaos is all we speak now! ${Hero.destroy()}`) :
          console.log(`${this.name} uses ${this.weapons[0]}. ${Hero.takeDamage()} ${Hero.name} loses ${hpLost} HP. ${Hero.name} only has ${Hero.healthPoints} HP left!`);
      
        }//disappear

        duplicate(Hero) {
          function attack(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        } 
          let hpLost = attack(0, 5);
          Hero.healthPoints = Hero.healthPoints - hpLost;
            Hero.healthPoints <= 0 ? 
            console.log(`${Hero.takeDamage()} ${this.name} uses ${this.weapons[1]}. ${Hero.name} has been defeated! Chaos is all we speak now! ${Hero.destroy()}`) :
            console.log(`${this.name} uses ${this.weapons[1]}. ${Hero.takeDamage()} ${Hero.name} loses ${hpLost} HP. ${Hero.name} only has ${Hero.healthPoints} HP left!`);
        }
      }//villian
  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
   
  
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    const lambdaWoman =  new Hero ({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'FreedomWriter',
      team: 'Lambda Force',
      weapons: [
        'Console',
        'Debugger',
      ],
      language: 'JavaScript',
      home: 'GitHub',
      superPower: 'Coding'
    });
  
    const curly =  new Villian ({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Curly Braces',
      team: 'Darkside',
      weapons: [
        'Disappearing',
        'Duplicating',
      ],
      language: 'Chaos',
      home: 'Nowhere',
      superPower: 'Code Breaking'
    });
  
    console.log(lambdaWoman);
    console.log(curly);
    console.log(lambdaWoman.greet()); 
    console.log(curly.greet()); 
    console.log(lambdaWoman.takeDamage()); 
    console.log(lambdaWoman.destroy()); 
    curly.duplicate(lambdaWoman);
    lambdaWoman.con(curly);
    curly.disappear(lambdaWoman);
    curly.duplicate(lambdaWoman);
    lambdaWoman.con(curly);                     
    lambdaWoman.con(curly);
    lambdaWoman.debug(curly);
    curly.duplicate(lambdaWoman);
  
     