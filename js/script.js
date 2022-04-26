let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".thickness__select");
let elSize = document.querySelector(".size");
let elAdd = document.querySelector(".add");
let elAddition = document.querySelector(".additions");
let elThicknessResultSpan = document.querySelector(".thicknessResult__span");
let elSizeResult = document.querySelector(".sizeResult");
let elAddResultList = document.querySelector(".addResult__list");
let elAdditionsResultList = document.querySelector(".additionsResult__list");


let thickness = ["Yupqa", "O'rta", "Qalin"];
let size = ["25sm", "30sm", "35sm"];
let add = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let addition = ["Achchiq", "Sosiskali"];

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

for (let i = 0; i < add.length; i++) {
  let elInputCheck = document.createElement("input");
  let elLabelCheck = document.createElement("label");
  elInputCheck.type = "checkbox";
  elLabelCheck.textContent = add[i];
  elAdd.appendChild(elInputCheck);
  elAdd.appendChild(elLabelCheck);
}

for (let i = 0; i < addition.length; i++) {
  let elInpCheck = document.createElement("input");
  let elLabCheck = document.createElement("label");
  elInpCheck.type = "checkbox";
  elLabCheck.textContent = addition[i];
  elAddition.appendChild(elInpCheck);
  elAddition.appendChild(elLabCheck);
}

