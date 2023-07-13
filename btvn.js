// BÀI TẬP VỀ NHÀ
// 1. Tính tổng của hai số nguyên đã cho và in kết quả ra màn hình:
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("Tổng hai số nguyên là: " + sum);

// 2. Viết chương trình JavaScript để tính chu vi của một hình tròn với bán kính đã cho và in kết quả ra màn hình.
let banKinh = 5;
let chuVi = 2 * Math.PI * banKinh;
console.log("Chu vi của hình tròn là: " + chuVi);

// 3. Viết chương trình JavaScript để kiểm tra xem một số đã cho có phải là số chẵn hay số lẻ không và in kết quả ra màn hình.
let num3 = 7;
if (num3 % 2 === 0) {
  console.log(num3 + " là số chẵn");
} else {
  console.log(num3 + " là số lẻ");
}

// 4. Viết chương trình JavaScript để tạo ra một chuỗi mới từ hai chuỗi đã cho bằng cách nối chúng lại với nhau và in kết quả ra màn hình.
let chuoi1 = "This is";
let chuoi2 = "a new era";
let chuoiMoi = chuoi1 + " " + chuoi2;
console.log("Chuỗi mới: " + chuoiMoi);

// 5. Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có chứa một từ hay không và in kết quả ra màn hình.
let chuoi3 = "Hello World";
let tuCanKiemTra = "World";
if (chuoi3.includes(tuCanKiemTra)) {
  console.log(chuoi3 + " chứa từ " + tuCanKiemTra);
} else {
  console.log(chuoi3 + " không chứa từ " + tuCanKiemTra);
}

// 6. Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có phải là chuỗi rỗng hay không và in kết quả ra màn hình.
let chuoi4 = "";
if (chuoi4 === "") {
  console.log("Chuỗi rỗng");
} else {
  console.log("Chuỗi không rỗng");
}

// 7. Viết một chương trình JavaScript để kiểm tra xem một số đã cho có phải là số dương hay số âm không.
let num4 = -10;
if (num4 > 0) {
  console.log(num4 + " là số dương");
} else if (num4 < 0) {
  console.log(num4 + " là số âm");
} else {
  console.log(num4 + " là số 0");
}

// 8. Viết một chương trình JavaScript để tính tổng, hiệu, tích, thương của hai số đã cho.
let num5 = 12;
let num6 = 24;
let sum2 = num5 + num6;
let subtraction = num5 - num6;
let multiplication = num5 * num6;
let division = num5 / num6;
console.log("Tổng: " + sum2);
console.log("Hiệu: " + subtraction);
console.log("Tích: " + multiplication);
console.log("Thương: " + division);