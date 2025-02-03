"use strict";

//Skapa en array

let courses = [];

//starta funktion när fönstret öppnas

window.onload = () => {
    loadCourses();
}
//hämta data

async function loadCourses() {
    try {
const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json");
if (!response.ok) {
    throw new Error("Fel vid anslutning...");
}
courses = await response.json();
displayCourses(courses);
    } catch (error) {
        console.error(error);
    }

}

//skriva ut data

function displayCourses(data) {
console.log(data);
const coursesEl = document.querySelector("#publishInfo");
coursesEl.innerHTML="";
courses.forEach(course=>{
coursesEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`
}) 
}
