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

async function studentData() {
  const getRollNumbers = await rollNumbersPromise;
  console.log(getRollNumbers);
  const getStudentData = await getStudentByRollNumberPromise(getRollNumbers[1]);
  console.log(getStudentData);
  return getStudentData;
}
studentData().then((obj) => {
  console.log(obj);
}).catch(error => {
  console.log('error:', error);
});