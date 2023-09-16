//latihan variabel string dan number
let firstName = 'Junaedi';
let lastName = 'Alfarizi';
let userName = 'Junaedi Alarizi';
let age = 32;
let email = 'junaedi38@gmail.com'
let hoby = ['Travelling','Kuliner','Badminton','Main Gitar'];
let job = 'Karywan Swasta';
let phone = '085716493756';
let isMarried = true;

console.log('Halo nama saya'+" "+firstName+" "+lastName,'usiaku'+" "+age+" "+'tahun,',
'profesi saya sebagai'+" "+job+".",'Salam kenal!');

console.log('Saya memiliki dua hobi yang sangat saya sukai yaitu'+" "+hoby[0]+"&"+hoby[1]+"."+
'Tapi saya juga memiliki hobi lainya seperti'+" "+hoby[2]+"&"+hoby[3]);

console.log('Saya memiliki akun GitHub dengan nama username'+" "+userName+","+
'dan kamu bisa menghubungi saya di'+" "+phone+" "+'atau'+" "+'email saya'+" "+
'di'+" "+email+ "\n\n");


//latihan operator aritmatika
let nilai1 = 2;
let nilai2 = 5;
let nilai3 = 10;
let nilai4 = 20;
let nilai5 = 30;
let nilai6 = 55;
let nilai7 = 10;

const penjumlahan = nilai3+nilai3;
const pengurangan = nilai4-nilai3;
const perkalian = nilai2*nilai3;
const pembagian = nilai5/nilai2;
const modulus = nilai6 % nilai1;

console.log("Hasil Penjumlahan",penjumlahan);
console.log("Hasil Pengurangan",pengurangan);
console.log("Hasil Perkalian",perkalian);
console.log("Hasil Pembagian",pembagian);
console.log("Hasil Modulus",modulus);


//latihan operator perbandingan
let test;
test = nilai1 < nilai2;
console.log(test);

test = nilai3 === nilai7;
console.log(test);

test = nilai3 == nilai4;
console.log(test);

test = nilai6 <= nilai5;
console.log(test);


//latihan logika

let benar = true;
let salah = false;
let dan = benar && salah
console.log(dan);

let atau = benar || salah;
console.log(atau);

benar = !false;
console.log(benar);


//latihan spread operator
let unggas = ["Ayam", "Burung", "Puyuh", "Kalkun"];
let reptil = ["Buaya", "Ular", "Komodo", "Biawak"];

let binatang = [...unggas, ...unggas];
console.log(binatang);


//latihan if else
let usia = 45;
if (usia <= 5) {
    console.log("Balita")
  } else if (usia <= 12) {
    console.log("Anak-Anak")
  } else if (usia <= 20) {
    console.log("Remaja")
  } else if (usia <= 40) {
    console.log("Dewasa")
  } else if (usia <= 60) {
    console.log("Tua")
  } else {
    console.log("Paruh baya atau meninggal");
  }


  //latihan switch
  let klubEropa = "Liverpool";
  switch (klubEropa) {
    case "Liverpool":
      console.log("Klub Inggris");
      break;
    case "Barcelona":
      console.log("Klub Spanyol");
      break;
    case "Juventus":
      console.log("Klub Italia");
      break;
    case "PSG":
      conole.log("Klub Prancis");
      break;
      case "Borrusia Dortmun":
      console.log("Klub Jerman");
      break;
    case "Galatasaray":
      console.log("Klub Turki");
      break;
    case "AJAX":
      conole.log("Klub Belanda");
      break;
    default:
      console.log("Bukan Klub Eropa");
  }

//latihan looping

// ini adalah latihan for loop

for(let i = 100; i >= 0; i = i - 4){
    console.log(i);
}

for(let i = 0; i <= 90; i = i + 3){
    console.log(i);
}

let asean = [
    "Indonesia",
    "Singapura",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Brunei",
    "Kamboja",
    "Laos",
    "Myanmar",
    "Filipina",
    "Timor Leste",
  ];

  for (i of asean) {
    console.log(i);
  }