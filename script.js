function Person(name) {
  this.name = name;
  this.bioData = () => {
    console.log(`My name is ${this.name}`);
  }
}
const person1 = new Person('Anuj');
const person2 = new Person('Yogesh')
person1.bioData();
person2.bioData();


class Student {
  constructor(name) {
    this.name = name;
  }
  bioData() {
    console.log(`My name is ${this.name}`);
  }
}
const student1 = new Student('Vikas');
student1.bioData();

class Player extends Student {
  constructor(name, game) {
    super(name);
    this.game = game;
  }
  playGame() {
    console.log(`My name is ${this.name}, I play ${this.game}`);
  }
  callParentBio() {
    return super.bioData();
  }
}
let player1 = new Player('player1 name');
player1.bioData();
let player2 = new Player('player2 name', 'ludo');
player2.playGame();
console.log("---------");
player2.callParentBio();


