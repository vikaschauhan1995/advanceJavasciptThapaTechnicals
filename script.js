function a() {
  const fa = "this is funciton a start";
  console.log(fa);
  b();
  console.log("function a end");
}
function b() {
  console.log("this is function b");
  c();
}
function c() {
  console.log("this is c function");
}
a();