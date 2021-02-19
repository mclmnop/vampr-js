class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentAncestor = this;
    while (currentAncestor.creator){
      currentAncestor = currentAncestor.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    console.log('premier', this.numberOfVampiresFromOriginal, 'deuxieme', vampire.numberOfVampiresFromOriginal)
    if(vampire.numberOfVampiresFromOriginal === 0 ) {
      return false;
    } else {
      return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal);
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let ancestorArray = [];
    let currentCreator = this;
    console.log(currentCreator)
    while (currentCreator.creator.name) {
      ancestorArray.push(currentCreator.creator.name);
      currentCreator = currentCreator.creator;
    }
    console.log(ancestorArray)



  }
}

rootVampire = new Vampire("root");
// offspring1 = new Vampire("andrew");
// offspring2 = new Vampire("sarah");
// rootVampire.addOffspring(offspring1);
// rootVampire.addOffspring(offspring2);

// console.log(offspring1.creator.name);
// console.log(rootVampire.numberOfVampiresFromOriginal);


offspring1 = new Vampire("a");
offspring2 = new Vampire("b");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
offspring6 = new Vampire("f");
offspring7 = new Vampire("g");
offspring8 = new Vampire("h");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);

console.log(offspring8.closestCommonAncestor(offspring7).name)

module.exports = Vampire;

// let commonAncestor = "";
// let currentVampire = this;
// console.log(vampire.creator.name, currentVampire.creator.name)
// while (currentVampire.creator || vampire.creator){
//   if (vampire.creator === currentVampire.creator) {
//     console.log('Round 2', vampire.creator.name, currentVampire.creator.name)
//     return vampire.creator.name;
//   }
//   currentVampire = currentVampire.creator;
// }
// return "poil";