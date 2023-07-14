console.log("Hello World!");

// 4. Tạo 3 biến và nối chuỗi lại từ 3 biến này sao cho kết quả này là “Điểm 10 là điểm tuyệt đối” và in ra màn hình
let diem = "Điểm";
let soDiem = 10;
let noiDung = "là điểm tuyệt đối";

let ketQua = diem + " " + soDiem + " " + noiDung;
console.log(ketQua);

// 5.Tính và in ra diện tích của hình tròn với đường kính (r=5)
let r = 5;
let pi = Math.PI;

let dienTich = pi * r * r;
console.log("Diện tích của hình tròn là:" + dienTich);

// a. Tạo biến lưu trữ phù hợp cho tên 5 người bạn
let friends = ["Jenny", "Jessica", "Kane", "Andy", "Liam"];
let ages = [32, 46, 28, 23, 32];

// b. Tạo biến lưu trữ tuổi tương ứng cho 5 người bạn trên

let listFriends = {
  Jenny: 32,
  Jessica: 46,
  Kane: 28,
  Andy: 23,
  Liam: 32,
};

// c. Xem lại kiến thức string literal để nối chuỗi tên và tuổi của từng người bạn
for (let friends in listFriends) {
  let nameLength = `Tên: ${friend}, Tuổi: ${listFriends[friend]}`;
  console.log(nameLength);
}

// d. Tìm và in ra chiều dài tên của những người bạn trên
let listFriends1 = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

for (let i = 0; i < listFriends1.length; i++) {
  let nameLength = listFriends1[i].length;
  console.log("Chiều dài tên của ${listFriends1[i]} là" +nameLength);
}

// e. Tìm và in ra độ tuổi trung bình của những người bạn trên
let averageAges = [25, 30, 27, 32, 29];

let sum = 0;
for (let i = 0; i < averageAges.length; i++) {
  sum += averageAges[i];
}

let average = sum / averageAges.length;
console.log("Độ tuổi trung bình của những người bạn là:" + average);

// f. Tìm và in ra màn hình tổng số tuổi của 5 bạn trên
let sumAges = [25, 30, 27, 32, 29];

sum = 0; // Reset giá trị sum
for (let i = 0; i < sumAges.length; i++) {
  sum += sumAges[i];
}

console.log("Tổng số tuổi của những người bạn là:" + sum);
