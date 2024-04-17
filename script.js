document.addEventListener("DOMContentLoaded", function() {
    const collapseButton = document.getElementById("collapseButton");
    const responsiveIcon = document.getElementById("responsiveIcon");
    const leftMenu = document.querySelector(".left-menu");

    // Toggle collapsed class on left menu when collapse button is clicked
    collapseButton.addEventListener("click", function() {
        leftMenu.classList.toggle("collapsed");
        collapseButton.classList.toggle("collapsed"); // Toggle collapsed class on the button itself
    });

    // Toggle collapsed class on left menu when responsive icon is clicked
    responsiveIcon.addEventListener("click", function() {
        leftMenu.classList.toggle("collapsed");
        responsiveIcon.classList.toggle("collapsed"); // Toggle collapsed class on the button itself
    });
});




// Modal script
// Function to open the modal
function openSettingModalBtn() {
  var modal = document.getElementById('mySettingModal');
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  var modal = document.getElementById('mySettingModal');
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById('mySettingModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};




let currentPercentage = 50; // Initial percentage

function togglePercentage() {
  currentPercentage = 50; // Reset percentage to 50% when clicking on it
  updateButtonText();
}

function updateButtonText() {
  currentPercentage = Math.max(0, Math.min(100, currentPercentage)); // Ensure percentage stays within range
  document.getElementById("percentage-btn").innerText = currentPercentage + "%";
}


 // Function to open the selected tab
 function openTab(evt, tabName) {
  var i, tabcontent, tabBtns;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabBtns = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();