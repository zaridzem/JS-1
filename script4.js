let user = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (user.age < 18 && user.studentstatus == "active") {
  console.log("Hello");
} else if (user.name == "Levani") {
  console.log("Hello Levani");
} else if (user.studentstatus == "active" || user.age < 25) {
  console.log("Hello World");
} else {
  console.log("error");
}
