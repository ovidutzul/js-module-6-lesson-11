/*
  # Task 1

  const technologies = ["Javascript", "Python", "CSS", "HTML"];

  1. Get container element
  2. Create a cycle for sorting array elements
  3. Create a li tag
  4. Write the text from the array inside the list items
  5. Place li inside ul
  6. Place ul tag with items on the page
*/

const technologies = ["Javascript", "Python", "CSS", "HTML"];
const containerElem = document.querySelector("#container");
technologies.sort();
const listElem = document.createElement("ul");

function createListItem(parentNode, text) {
  if (!text || text.length === 0) {
    alert("You must insert a valid string!");
    createListItem(parentNode, prompt("Insert a new item in the list:"));
  } else {
    const liElem = document.createElement("li");
    liElem.textContent = text;
    parentNode.append(liElem);
  }
}

// for (let i = 0; i < technologies.length; i++) {
//   const liElem = document.createElement("li");
//   liElem.textContent = technologies[i];
//   listElem.append(liElem);
// }

technologies.forEach(technology => createListItem(listElem, technology));
containerElem.append(listElem);

// createListItem(listElem, prompt("Insert a new item in the list:"));

/*
  # Task 2

  Starting from this colors array, create buttons dynamically;

  1. Iterate trough the array;
  2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
  3. Set the text of the button
  4. Add the button to the UI
*/

const colors = [
  {
    label: "Primary Button",
    color: "#ff0000",
    isPrimary: true
  },
  {
    label: "Click Me",
    color: "#00ff00",
    isPrimary: true
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false
  },
];

const divElem = document.createElement("div");
colors.forEach(color => {
  const buttonElem = document.createElement("button"); // <button></button>
  buttonElem.textContent = color.label;
  buttonElem.style.backgroundColor = color.color;

  if (color.isPrimary) {
    buttonElem.classList.add("primary-button");
  }

  divElem.append(buttonElem);
});

const testElem = document.querySelector("#testId");
testElem.append(divElem);