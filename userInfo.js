let userName = sessionStorage.getItem("name");
let userPoints = sessionStorage.getItem("points");
let userTime = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = userName;
document.querySelector(".points").innerHTML = userPoints;
document.querySelector("span.time_taken").innerHTML = userTime;
