/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.addEventListener("DOMContentLoaded", () => {
    fetch('loadpage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('load').innerHTML = data;
            console.log("Content loaded successfully.");
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
});
