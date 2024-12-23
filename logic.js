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
  Raviolones: [
    "Cebolla caramelizada",
    "Jamón y queso",
    "Espinaca",
    "Calabaza y queso",
    "Bondiola y queso",
  ],
  Sorrentinos: [
    "Cebolla caramelizada",
    "Jamón y queso",
    "Espinaca",
    "Calabaza y queso",
    "Bondiola y queso",
  ],
  Lasagna: ["Carne", "Espinaca", "Champi", "Bechamel de queso"],
  Canelones: ["Carne"],
  Salsa: ["Fileto", "Queso"],
  Focaccia: ["Aceituna, cherry, cebolla"],
  Grisines: ["Queso"],
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

//LOGICA CARRITO

function moveTruck() {
  var image = document.getElementById("camionsito");
  image.classList.add("move");
}

function add() {
  var comida = document.getElementById("firstSelect");
  var sabor = document.getElementById("secondSelect");
  var cantidad = document.getElementById("cantidad");
  moveTruck();
  // Select the UL element where you want to add the LI
  var ul = document.getElementById("list"); // Replace "list" with the actual ID of your UL element
  if (ul) {
    liExists = document.getElementById(
      `${cantidad.value}${comida.value}${sabor.value}`
    );
    if (liExists) return;
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${cantidad.value}  ${comida.value} de ${sabor.value}`
      )
    ); // Replace "Element 4" with your desired text

    icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-times");
    icon.style.marginLeft = "5px";
    icon.addEventListener("click", function () {
      li.remove(); // Removes the parent <li> element
    });

    li.id = `${cantidad.value}${comida.value}${sabor.value}`;
    li.appendChild(icon);
    li.style.fontSize = "14px";
    ul.appendChild(li);
    li.classList.add("bodyColorForTextx");
  } else {
    console.error("UL element with ID 'list' not found");
  }
}

function pedirPorMail() {
  var input = document.getElementById("nombreInput");
  var ul = document.getElementById("list"); // Replace "list" with the actual ID of your UL element
  var link =
    "mailto:nicolas.desantaana.com" +
    "&subject=" +
    encodeURIComponent("Pedido nuevo") +
    "&body=" +
    encodeURIComponent(ul.innerText);
  window.location.href = link;
}

function pedirPorWpp() {
  const num = +598098714645;
  var msg = document.getElementById("list").innerText;
  const name = document.getElementById("nombreInput").value;

  const win = window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}
