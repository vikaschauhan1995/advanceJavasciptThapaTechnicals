
function callBackHell() {
  setTimeout(function () {
    const roleNumbers = [1, 2, 3, 4, 5];
    console.log(roleNumbers);
    setTimeout((roleNumber) => {
      const obj = {
        name: 'Vikas',
        age: 27
      };
      console.log(obj);
      setTimeout((obj) => {
        const gender = 'male';
        console.log(`My name is ${obj.name} and i am ${obj.age} years old, gender ${gender}`);
      }, 2000, obj);
    }, 2000, roleNumbers[1]);
  }, 2000)
}
callBackHell();