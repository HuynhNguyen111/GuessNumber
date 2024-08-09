const min=1;
const max=10;
const ketQua=Math.floor(Math.random()*(max-min)+min);

let soLanThu=0;
let so;
let chay=true;

while(chay==true){
    so=window.prompt(`Nhập số từ ${min} đến ${max}`);
    so=Number(so);
    if (isNaN(so)) {
        window.alert('Vui lòng nhập số');
    } else if(so<min||so>max) {
        window.alert(`Vui lòng nhập số trong khoảng ${min} -${max}`);
    } else{
        soLanThu++;
        if (so<ketQua) {
            window.alert("Quá nhỏ vui lòng thử lại");
        } else if(so>ketQua) {
            window.alert('Quá lớn vui lòng thử lại');
        } else{
            window.alert(`Xin chúc mừng! Bạn đã đoán đúng kết quả là ${ketQua} ở lần thử ${soLanThu}`);
            chay=false;
        }
    }

}