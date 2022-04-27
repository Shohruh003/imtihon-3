/* all variables0 */
let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".thickness__select");
let elSize = document.querySelector(".size");
let elAdd = document.querySelector(".add");
let elAddition = document.querySelector(".additions");
let elThicknessResultSpan = document.querySelector(".thicknessResult__span");
let elSizeResult = document.querySelector(".sizeResult");
let elAddResultList = document.querySelector(".addResult__list");
let elAdditionsResultList = document.querySelector(".additionsResult__list");

// ======================== required arrays====================
let thickness = ["Yupqa", "O'rta", "Qalin"];
let size = ["25sm", "30sm", "35sm"];
let add = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let addition = ["Achchiq", "Sosiskali"];

// display the thickness of the pizza
for (let i = 0; i < thickness.length; i++){
  let newOption = document.createElement("option");
  newOption.textContent = thickness[i];
  elSelect.appendChild(newOption);
}
elForm.addEventListener("change", function(e){
  e.preventDefault();
  let newSpan = document.createElement("span");
  newSpan.textContent =elSelect.value;
  elThicknessResultSpan.textContent = elSelect.value;
})

// choosing the size of the pizza
for (let i = 0; i < size.length; i++){
  let elInputRadio = document.createElement("input");
  let elLabelRadio = document.createElement("label");
  elInputRadio.type = "radio";
  elInputRadio.name = "nemeRadio";
  elInputRadio.style.width = "20px";
  elInputRadio.style.height = "20px";
  elInputRadio.style.margin = "20px";
  elLabelRadio.textContent = size[i];
  elSize.appendChild(elInputRadio);
  elSize.appendChild(elLabelRadio);
}
elForm.addEventListener("change", function(evt){
  evt.preventDefault();
  let elSpan = document.createElement("span");
  elSpan.textContent = elLabelRadio.value;
  elSizeResult.appendChild(elSpan);
})

// necessary additions on the pizza
for (let i = 0; i < add.length; i++) {
  let elInputCheck = document.createElement("input");
  let elLabelCheck = document.createElement("label");
  let elList = document.createElement("li");
  elInputCheck.type = "checkbox";
  elLabelCheck.textContent = add[i];
  elList.appendChild(elInputCheck);
  elList.appendChild(elLabelCheck);
  elAdd.appendChild(elList);
  elInputCheck.style.width = "18px";
  elInputCheck.style.height = "18px";
  elInputCheck.style.marginRight = "2px";
  elLabelCheck.style.marginRight = "18px";
  elLabelCheck.style.fontSize = "18px";
}


// additions
for (let i = 0; i < addition.length; i++) {
  let elInpCheck = document.createElement("input");
  let elLabCheck = document.createElement("label");
  elInpCheck.type = "checkbox";
  elLabCheck.textContent = addition[i];
  elAddition.appendChild(elInpCheck);
  elAddition.appendChild(elLabCheck);
  elInpCheck.style.width = "18px";
  elInpCheck.style.height = "18px";
  elLabCheck.style.fontSize = "18px";
  elInpCheck.style.marginRight = "10px";
  elLabCheck.style.marginRight = "150px";
}

