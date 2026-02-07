var son1 = prompt("Birinchi sonni kiriting iltimos🫡:");
var son2 = prompt("Ikkinchi sonni kiriting iltomos🫡:");
var amal = prompt("Amalni kiriting (+ * / -):");

son1 = Number(son1);

son2 = Number(son2);

if (amal == "+") {
  alert("Natija: " + (son1 + son2));
  console.log("Natija: " + (son1 + son2));


} else if (amal == "-") {

  alert(`Natija: ${son1 - son2}`);

  console.log(``);

}

if (amal == "*") {
  alert("Natija: " + (son1 * son2));
  console.log("Natija: " + (son1 * son2));

  
} else if (amal == "/") {

  alert(`Natija: ${son1 / son2}`);

  console.log(``);

} else {

  alert("Xato! Faqat + * / - kiriting");

 
}