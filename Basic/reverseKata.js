//mereverse kata dari Javascript//
//Output yang di hasilkan adalah "tpircsavaJ"//

var kata ="Javascript";
var reverseKata = "";
const indexPertama = 0;
const indexTerakhir = kata.length-1;
var pointer = indexTerakhir;

for (var pointer = indexTerakhir; pointer>=indexPertama; pointer--) {
    reverseKata = reverseKata + kata[pointer];
};
console.log("Hasil Output reverseKata", reverseKata)