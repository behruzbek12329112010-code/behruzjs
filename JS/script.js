var reslut = prompt("yoshingiz").trim();

// trim bu ismimizni yozsak consologa ismimizni oldidan va orqasidagi bushliqlarni olb tashlayd

console.log(
  //   " alik nma niyatin bor tez mAXSADGA UTDA @bakhodirovich.one insta sraz patpis bosib yoz nma muammo busa yechamiz " +
  reslut
);

console.log("Result length:" + reslut.length);

if (reslut < 80 && reslut > 18) {
  console.log("sotiladi");
} else {
  console.log("sotilmedi");
}
