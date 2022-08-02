function task7 () {
var userName = prompt("Enter your name");
var gender = prompt("Enter your gender (male of female)");
var age = prompt("Enter your age");
if(age <= 0) {
    alert("YOUR AGE IS NOT TRUE!!!!");
}
if (confirm("Do you want a welcoming message?\nEither ok or cancle.") == true) {
if(gender == "male") {
    alert("Hi Mr "+userName+ " welcome to our website");
} else if(gender =="female") {
    alert("Hi Ms "+userName+ " welcome to our website");
} else {
    alert("Hi "+userName+" welcome to our website");
}
}
var q1 = prompt("Are you a developer? YES OR NO");
var q2 = prompt("Do you love python? YES OR NO");
var q3 = prompt("Do you love JS? YES OR NO");
arr = [];
if(userName !== null) {
    arr.push(userName);
    } else {
        arr.push("invalid");
    }
    if (gender !== null) {
        arr.push(gender);
    } else {
        arr.push("invalid");
    }
    if (age !== null) {
        arr.push(age);
    } else {
        arr.push("invalid");
    }
    if (q1 !== null) {
        arr.push(q1);
    } else {
        arr.push("invalid");
    }
    if (q2 !== null) {
        arr.push(q2);
    } else {
        arr.push("invalid");
    }
    if (q3 !== null) {
        arr.push(q3);
    } else {
        arr.push("invalid");
    }
console.log(arr);
}
task7();