//[Bài tập] Biến, kiểu dữ liệu và toán tử///

// Bài 1 : Tính điểm học sinh AA

alert("Hãy nhập số điểm của học sinh AA ");
let a = Number(prompt("Điểm môn Vật lí"));
let b = Number(prompt("Điểm môn Hóa học"));
let c = Number(prompt("Điểm môn Sinh học"));

alert(
  ` Điểm tổng 3 môn của học sinh AA là ${
    a + b + c
  } \n Điểm trung bình 3 môn của học sinh AA là ${(a + b + c) / 3}`
);

// Bài 2 : Đổi 0C sang 0F

let ak = prompt(
  "Nhập một giá trị Celsius(0C) để chuyển sang giá trị Fahrenheit(0F) "
);
alert(`Gía trị Fahrenheit(0F) được chuyển đổi là : ${(ak / 5) * 9 + 32} `);

// Bài 3 : Phương trình tính diện tính hình tròn

let bankinh = prompt("Nhập bán kính hình tròn để diện tích");
alert(`Diện tích hình tròn cần tính là : ${bankinh * bankinh * Math.PI}`);

// Bài 4 : Phương trình tính chu vi hình tròn

let bankinh2 = prompt("Nhập bán kính hình tròn để tính chu vi");
alert(`Chu vi hình tròn cần tính là : ${2 * bankinh2 * Math.PI}`);
