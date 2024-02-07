function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    fetch(pageName + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById(pageName).innerHTML = data;
        });
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "rgba(192, 0, 128, 0.5)";
    }

function openSubPage(pageName, elmnt) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("subtablink");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].style.backgroundColor = "";
    }
    fetch('projects/' + pageName + '.html') // Change this line
        .then(response => response.text())
        .then(data => {
            document.getElementById(pageName).innerHTML = data;
        });
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "rgba(192, 0, 128, 0.5)";
}

// Get the element with id="defaultOpen" and click on it
window.onload = function() {
    document.getElementById("defaultOpen").click();
}