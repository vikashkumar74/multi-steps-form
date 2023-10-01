"use strict";
const nextStep = document.querySelector(".btn");
const goBackBtn = document.querySelector(".go-back-btn");
const right = document.querySelectorAll(".right");
const steps = document.querySelectorAll(".num");
const nextBtn = document.querySelector(".next-btn");
const arcade = document.querySelector(".arcade");
const arcadeBox = document.getElementById("arcade-box");
const advanced = document.querySelector(".advanced");
const advancedBox = document.getElementById("advanced-box");
const pro = document.querySelector(".pro");
const proBox = document.getElementById("pro-box");
const subPlanBox = document.querySelectorAll(".sub-plan-box");
const arcadeBill = document.querySelector(".arcade-bill");
const advancedBill = document.querySelector(".advanced-bill");
const proBill = document.querySelector(".pro-bill");
const onlineService = document.querySelector(".online-service");
const onlineServcesAamount = document.querySelector(".online-servces-amount");
const storage = document.querySelector(".storage");
const storageAamount = document.querySelector(".storage-amount");
const customizable = document.querySelector(".customizable");
const customizableAamount = document.querySelector(".customizable-amount");
const inputBox1 = document.querySelector(".input-box-1");
const inputBox2 = document.querySelector(".input-box-2");
const inputBox3 = document.querySelector(".input-box-3");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const boxs = document.querySelectorAll(".box");
const selectPlan = document.querySelectorAll(".select-plan");
const freeMonths = document.querySelectorAll(".free-months");
const btn = document.querySelector(".switch-box");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const Total = document.querySelector(".total");
const arr = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];

let sum = 1;
let s = 0;
let a = 0;
let b = 0;
let c = 0;
let p = 0;

// for close all form
function toCloseForm() {
  right.forEach((e) => (e.style.display = "none"));
}
// to remove steps color
function removeColor() {
  steps.forEach((e) => e.classList.remove("active"));
}
// to move next page
function nextPage() {
  sum += 1;
  s = sum;

  toCloseForm();
  removeColor();
  if (sum <= 4) {
    document.querySelector(`#step-${sum}`).classList.add("active");
  }
  document.querySelector(`#form-${sum}`).style.display = "flex";
  openbtn();
}
// to go back page
function prevPage() {
  s -= 1;
  sum = s;
  if (s >= 1) {
    toCloseForm();
    removeColor();
    document.querySelector(`#step-${s}`).classList.add("active");
    document.querySelector(`#form-${s}`).style.display = "flex";
  }
  if (s == 1) {
    goBackBtn.style.opacity = "0";
  }
  openbtn();
}
//  reset
function openbtn() {
  if (s == 4) {
    nextStep.textContent = "conform";
  } else if (s < 4) {
    nextStep.textContent = "Next step";
  }
  if (s >= 5) {
    nextBtn.style.display = "none";
  }
  if (s == 2) {
    goBackBtn.style.opacity = "100";
  }
  if (s == 1) {
    goBackBtn.style.opacity = "0";
  }
}

// to remove borderColor
function removebordar() {
  subPlanBox.forEach((e) => (e.style.borderColor = "gray"));
}
//  to add items in bill
function addElementInList() {
  if (arr.length > 2) {
    arr.shift();
    arr.shift();
  }
  document.querySelector(".plan").innerHTML = arr[0];
  document.querySelector(".amount").innerHTML = arr[1];
  let result = arr[1].replace("$", "").replace("/mo", "").replace("/Yr", "");
  // console.log(result)
  arr5.push(Number(result));
}
//  to selectPlan
function addService() {
  arr2.push(onlineService.textContent);
  arr2.push(onlineServcesAamount.textContent);

  if (a % 2 != 0) {
    document.querySelector(".on").innerHTML = arr2[0];
    document.querySelector(".sa").innerHTML = arr2[1];
    box1.style.borderColor = "blue";
    console.log(arr2);
    let t = arr2[1].replace("+$", "").replace("/mo", "").replace("/yr", "");
    arr5.push(Number(t));
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });

    Total.textContent = `$${total}`;
  } else {
    document.querySelector(".on").innerHTML = "";
    document.querySelector(".sa").innerHTML = "";
    box1.style.borderColor = "gray";
    arr5.pop();
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });
    Total.textContent = `$${total}`;
  }
}

function addStroge() {
  arr3.push(storage.textContent);
  arr3.push(storageAamount.textContent);
  if (b % 2 != 0) {
    document.querySelector(".s").innerHTML = arr3[0];
    document.querySelector(".SA").innerHTML = arr3[1];
    box2.style.borderColor = "blue";
    let t = arr3[1].replace("+$", "").replace("/mo", "").replace("/yr", "");
    arr5.push(Number(t));
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });
    Total.textContent = `$${total}`;
  } else {
    document.querySelector(".s").innerHTML = "";
    document.querySelector(".SA").innerHTML = "";
    box2.style.borderColor = "gray";
    arr5.pop();
    console.log(arr5);
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });
    Total.textContent = `$${total}`;
  }
}
function addCustomize() {
  arr4.push(customizable.textContent);
  arr4.push(customizableAamount.textContent);
  if (c % 2 != 0) {
    document.querySelector(".C").innerHTML = arr4[0];
    document.querySelector(".CA").innerHTML = arr4[1];
    box3.style.borderColor = "blue";
    let t = arr3[1].replace("+$", "").replace("/mo", "").replace("/yr", "");

    arr5.push(Number(t));
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });
    Total.textContent = `$${total}`;
  } else {
    document.querySelector(".C").innerHTML = "";
    document.querySelector(".CA").innerHTML = "";
    box3.style.borderColor = "gray";
    arr5.pop();
    let total = arr5.reduce(function myFunc(total, num) {
      return total + num;
    });
    Total.textContent = `$${total}`;
  }
}
////////     ///////////////

/////////   ////////////
nextStep.addEventListener("click", nextPage);

goBackBtn.addEventListener("click", prevPage);

inputBox1.addEventListener("click", function () {
  a += 1;
  addService();
});
inputBox2.addEventListener("click", function () {
  b += 1;
  addStroge();
});
inputBox3.addEventListener("click", function () {
  c += 1;
  addCustomize();
});

arcadeBox.addEventListener("click", function () {
  removebordar();
  arcadeBox.style.borderColor = "blue";
  arr.push(arcade.textContent);
  arr.push(arcadeBill.textContent);
  addElementInList();
});
advancedBox.addEventListener("click", function () {
  removebordar();
  advancedBox.style.borderColor = "blue";
  arr.push(advanced.textContent);
  arr.push(advancedBill.textContent);

  addElementInList();
});
proBox.addEventListener("click", function () {
  removebordar();
  proBox.style.borderColor = "blue";
  arr.push(pro.textContent);
  arr.push(proBill.textContent);
  addElementInList();
});
////////    /////////////

// toggle button
btn.addEventListener("click", function () {
  p += 1;

  console.log(p);
  if (p % 2 == 0) {
    yearPlanSwitch();
  } else if (p % 2 != 0) {
    MonthsPlanSwitch();
  }
});

function yearPlanSwitch() {
  freeMonths.forEach((e) => (e.textContent = "2 Months free"));
  arcadeBill.textContent = "$90/Yr";
  advancedBill.textContent = "$120/Yr";
  proBill.textContent = "$150/Yr";
  onlineServcesAamount.textContent = " +$10/yr";
  storageAamount.textContent = " +$20/yr";
  customizableAamount.textContent = " +$20/yr";
  yearly.style.color = " hsl(213, 96%, 18%)";
  removebordar();
  boxs.forEach((e) => (e.style.borderColor = "gray"));
}
function MonthsPlanSwitch() {
  freeMonths.forEach((e) => (e.textContent = ""));
  arcadeBill.textContent = "$9/mo";
  advancedBill.textContent = "$12/mo";
  proBill.textContent = "$15/mo";
  onlineServcesAamount.textContent = " +$1/mo";
  storageAamount.textContent = " +$2/mo";
  customizableAamount.textContent = " +$2/mo";
  monthly.style.color = " hsl(213, 96%, 18%)";
  removebordar();
  boxs.forEach((e) => (e.style.borderColor = "gray"));
}
