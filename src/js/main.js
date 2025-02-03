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

function displayCourses(courses) {

const coursesEl = document.querySelector("#publishInfo");
coursesEl.innerHTML="";
courses.forEach(course=>{
coursesEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`
}) 
}

//händelselyssnare för att sortera i bokstavsordning

let courseCodeEl = document.getElementById("courseCode");

courseCodeEl.addEventListener("click", sortCodes);
document.querySelector("#name").addEventListener("click", sortCourseNames);
document.querySelector("#progression").addEventListener("click", sortProgressions);

//funktioner för att sortera i bokstavsordning

function sortCodes(courses) {
    courses.sort((a, b) => a.code > b.code ? 1 : -1);
}

function sortCourseNames(courses) {
    courses.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
}

function sortProgressions(courses) {
    courses.sort((a, b) => a.progression > b.progression ? 1 : -1);
}

