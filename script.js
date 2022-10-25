var a = "Hello guys!";
first();
function first() {
  var b = "How are you?";
  second();
  function second() {
    var c = "I am Vikas";
    third();
    function third() {
      var d = " Hurrey!!";
      forth();
      function forth() {
        console.log(a + b + c + d);
        fifth();
      }
    }
  }
}
function fifth() {
  var e = "natcho";
  // console.log(a + b + c + d + e); // Uncaught ReferenceError: b is not defined
  // b, c & d are not defined
}