// Programmation en général
// Instruction ou statements
// Code structure
// Variables
// Data types
// Interaction: alert,prompt,confirm
// Type Conversions

//object

// const user = {
//   name: "Ravonjisoa",
//   email: "ravonjisoa@email.com",
// };

// console.log(user.name + user.email);
// let mess = "Bonjour mon amour"; ==> /*Global variable*/

// function User(name, email) {
//   let mess = "Hello hasband"; /*Local variable*/
//   (this.name = name),
//     (this.email = email),
//     (this.detail = function () {
//       console.log(this.name + " " + this.email);
//       console.log(mess);
//     });
// }

// const user = new User(" Rakoto", " rakoto@gmail.com");
// user.detail();

// function nt(eleve, note) {
//   var newnote;
//   (this.note = note),
//     (this.eleve = eleve),
//     (this.det = function () {
//       console.log("Le note de " + this.eleve + " est " + this.note);
//     });
// }
// var newnote = new nt("sarika", 12);
// var newnote1 = new nt("kanto", 14);
// var newnote2 = new nt("Teddy", 9);
// var newnote3 = new nt("Mirana", 7);
// newnote.det();
// newnote1.det();
// newnote2.det();
// newnote3.det();

// console.log(" Node de " + "sitraka " + " est " + 12);

//

// function heur(heur) {
//   this.heur = heur;
//   var heur = 16;
//   if (heur <= 9) {
//     console.log("Mbola maraina ny andro");
//   } else if (heur >= 9 && heur <= 12) {
//     console.log("Mitatao vovonana");
//   } else if (heur >= 15 && heur <= 19) {
//     console.log("EFa ariva ny andro");
//   } else if (heur > 20 && heur < 24) {
//     console.log("Alina ny andro");
//   } else if (heur >= 24) {
//     console.log("Diso ora ianao");
//   } else {
//     console.log("je ne comprend pas ");
//   }
// }

// heur();

// // Condition switch

// let andro = 7;
// switch (andro) {
//   case 1:
//     andro = "Alatsinainy";
//     break;
//   case 2:
//     andro = "Talata";
//     break;
//   case 3:
//     andro = "Alarobia";
//     break;
//   case 4:
//     andro = "Alakamisy";
//     break;
//   case 5:
//     andro = "Zoma";
//     break;
//   case 6:
//     andro = "Sabotsy";
//     break;
//   case 7:
//     andro = "Alahady";
//     break;
//   default:
//     andro = " Diso andro ianao";
//     break;
// }
// console.log(andro);

//boucle while

// let x = 7;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// boucle for
// for (var x = 0; x <= 10; x++) {
//   console.log(x);
// }
// let result = 0;
// while (result <= 5) {
//   console.log(result);
//   result = result + 1;
// }

// String
/*
length : retourne nombre de carractère
trim() : manala espace avant et arrière
indexOf() : retourne position 
lastIndexOf(): retourne dernier position
replace() : remplacer un mot
toUpperCase() et toLowerCase() : Majuscule et Minuscule
charAt() : retourne position 
split() : mizarazara
*/

// //dom
// var x = document.getElementById("titre").innerHTML;
// console.log(x);
// var cont = document.querySelector(".text").textContent;
// console.log(cont);

// // var text = "       Ny fianarana no lova tsara indrindra        ";
// var fianarana = document.querySelector(".fianarana").textContent;
// // var t = text.length;
// t = fianarana.trim();
// // t = text.indexOf("i");
// z = t.length;
// z = t.indexOf("i");
// z = t.lastIndexOf("i");
// z = t.replace("lova", "harena");
// x = z.replace("harena", "azo atao");
// x = z.toLowerCase();
// x = z.toUpperCase();
// x = z.charAt(4);
// x = z.split(" ");
// y = x[0];
// i = x[1];
// t = x[2];
// u = x[3];
// s = x[4];
// o = x[5];
// // console.log(y + " " + s.toUpperCase() + " " + o);
// var rh = document.querySelector(".test2").textContent;
// var raha = rh.split(" ");
// console.log(raha[0] + " " + raha[1] + " " + raha[3]);
// x = raha[0];
// y = raha[1];
// z = raha[2];
// o = raha[3];
// console.log(x + " " + y + " " + o.toUpperCase() + " !");

// function testmail(mail) {
//   var mail = document.querySelector("#mail").innerHTML;
//   this.mail = mail;
//   console.log(mail);
// }
// testmail();

// var mail = prompt("mail ...");
// var aro = mail.indexOf("@"); // retourne  position de aro si non -1
// var aro1 = mail.lastIndexOf("@");
// var point = mail.lastIndexOf("."); // retourne dernier position de point si non -1
// var n = mail.length;

//mamy@gmail.com
// nb caractère mail - 1
// if (
//   aro != -1 &&
//   point != -1 &&
//   aro == aro1 &&
//   point > aro + 1 &&
//   mail.charAt(n - 1) != "." &&
//   mail.charAt(aro != ".")
// ) {
//   console.log("correcte");
// } else {
//   console.log("incorrect");
// }

function myfunctionB() {
  var email = "mamy@gmail.com";
  var motdp = 12345;
  var mail = document.querySelector("#mail").value;
  var pass = document.querySelector("#password").value;

  if (mail == email && pass == motdp) {
    alert("Votre mail est : " + mail + " \n Votre mot de pass est : " + pass);
  } else if (mail != email && pass != motdp) {
    alert("Vérifier votre identifiant");
  } else {
    alert("Vérifier votre mot de pass");
  }
}
function myfunctionA() {
  var mail = "";
  var pass = "";
}
