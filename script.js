
function sum() {
  let add = 10 + 10;
  console.log(this);
}
// sum();

const vikas = {
  fullName: 'Vikas Chauhan',
  sum() {
    console.log(this); // ! this keyword points the vikas object
  },
  min: () => {
    // ! Inside a arrow function "this" points the window object
    console.log(this); // ! this keyword points to window object
  },
  calculation: function () {
    console.log("calculation", this); // ! this keyword points vikas object
    /*
    * @this key
    */
    function child() {
      console.log("child", this);// ! this keyword points to window object
    }
    child();
    let child2 = () => {
      console.log("child2", this);// ! inside arrow function "this" points vikas object
    }
    child2();
  }
}
vikas.sum();
vikas.min();
vikas.calculation();