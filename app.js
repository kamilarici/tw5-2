let tutulanSayi = Math.trunc(Math.random() * 100);

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const pWrite = document.querySelector("#write");
const pHak = document.getElementById("hak");
let eski = "0";
let yeni = "100";
let counter = 5;
button.addEventListener("click", (e) => {
  counterr();
  if (input.value > 100 || input.value < 0) {
    alert("istenilen aralıkta bir sayı giriniz");
  } else if (input.value == tutulanSayi) {
    alert("tebrikler kazandiniz");
    input.disabled = true;
    pWrite.innerHTML = "";
    pHak.innerHTML = "";
  } else if (input.value > tutulanSayi) {
    yeni = input.value;
    pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
  } else if (input.value < tutulanSayi) {
    eski = input.value;
    pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
  }
  input.value = "";
  // document.querySelector("#input").addEventListener("keydown", (e) => {
  //      console.log(e.code);
  //      console.log(e.keyCode);
  //? Basilan tus Enter ise
  //   if (e.code === "Enter") {
  //     button.click(); //? add butonun tiklanma fonksiyonu calistir.
  //   }
  // });
});

const counterr = () => {
  counter--;
  //! *******hak
  if (counter > 0) {
    pHak.innerHTML = `${counter} hakkınız kaldı`;
  } else {
    pHak.innerHTML = "HAKKINIZ KALMADI";
    input.value = "0";
  }
  //! *******hak
};
