const textElement = document.getElementById('text');
const text = 'Hi,Kamu menerima ini karna aku membagikan link proyek ini.aku berterima kasih karna kau berani mengungkapkan perasaanmu saat ini,aku dengan penuh kesadaran,aku menerimamu.Terima kasih sudah menunggu untuk membalas ini,begitu niat aku membuat codingan ini rawrrr';
let charIndex = 0;

function typeChar() {
  if (charIndex < text.length) {
    textElement.textContent += text[charIndex];
    charIndex++;
    setTimeout(typeChar, 50); // adjust the speed here
  }
}

typeChar();