

const rollNumbersPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.length > 0 ? resolve(numbers) : reject("Roll numbers no available!")
  }, 2000)
});

const getStudentByRollNumberPromise = (rollNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout((rNumber) => {
      const student = {
        name: 'Yogesh',
        rollNumber: rNumber,
        gender: 'Male'
      };
      resolve(student);
    }, 2000, rollNumber);
  });
};

rollNumbersPromise.then((rollNumbers) => {
  console.log(rollNumbers);
  return getStudentByRollNumberPromise(rollNumbers[1]);
}).then((student) => {
  console.log(student);
}).catch(error => {
  console.log("Error: ", error);
});