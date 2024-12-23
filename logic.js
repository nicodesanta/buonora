function showPastas() {
  var pastaDiv = document.getElementById("pastasDiv");
  var acompDiv = document.getElementById("acompDiv");
  acompDiv.style.display = "none";
  var salsaDiv = document.getElementById("salsaDiv");
  salsaDiv.style.display = "none";

  if (pastaDiv.style.display === "none" || pastaDiv.style.display === "") {
    pastaDiv.style.display = "block";
  } else {
    pastaDiv.style.display = "none";
  }
}
function showAcompañar() {
  var pastasDiv = document.getElementById("pastasDiv");
  pastasDiv.style.display = "none";
  var x = document.getElementById("acompDiv");
  var salsaDiv = document.getElementById("salsaDiv");
  salsaDiv.style.display = "none";
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showSalsas() {
  var pastasDiv = document.getElementById("pastasDiv");
  pastasDiv.style.display = "none";
  var acompDiv = document.getElementById("acompDiv");
  acompDiv.style.display = "none";
  var x = document.getElementById("salsaDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const optionsMapping = {
  1: [
    "Cebolla caramelizada",
    "Jamón y queso",
    "Espinaca",
    "Calabaza y queso",
    "Bondiola y queso",
  ],
  2: [
    "Cebolla caramelizada",
    "Jamón y queso",
    "Espinaca",
    "Calabaza y queso",
    "Bondiola y queso",
  ],
  3: ["Carne", "Espinaca", "Champi", "Bechamel de queso"],
  4: ["Carne"],
  5: ["Fileto", "Queso"],
  6: ["Aceituna, cherry, cebolla"],
  7: ["Queso"],
};

function populateSecondSelect() {
  const firstSelect = document.getElementById("firstSelect");
  const secondSelect = document.getElementById("secondSelect");

  // Clear current options in the second select
  secondSelect.innerHTML = "";

  // Get the selected value from the first select
  const selectedValue = firstSelect.value;

  // Populate the second select based on the mapping
  const options = optionsMapping[selectedValue] || [];
  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    secondSelect.appendChild(opt);
  });
}

function moveTruck() {
  var image = document.getElementById("camionsito");
  image.classList.add("move");
}
