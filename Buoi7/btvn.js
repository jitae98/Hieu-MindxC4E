// Bài tập 1: Kiểm tra tuổi
// Yêu cầu: Viết một chương trình JavaScript để kiểm tra xem một người có đủ tuổi để lái xe hay không. 
// Nếu tuổi lớn hơn hoặc bằng 18, in ra "Bạn có đủ tuổi để lái xe". 
// Ngược lại, in ra "Bạn chưa đủ tuổi để lái xe".

function kiemTraTuoi(age) {
  if (age >= 18) {
    console.log("Bạn có đủ tuổi để lái xe");
  } else {
    console.log("Bạn chưa đủ tuổi để lái xe");
  }
}

kiemTraTuoi(20);
kiemTraTuoi(16);

// Dùng câu lệnh if và else để kiểm tra giá trị tuoi có lớn hơn hoặc bằng 18 hay không, sau đó gọi function kiemTraTuoi và truyền các giá trị để kiểm tra.


// Bài tập 2: Kiểm tra số dương, âm, hay bằng 0
// Yêu cầu: Viết một chương trình JavaScript để kiểm tra xem một số cho trước có phải là số dương, số âm, hay bằng 0. In ra kết quả tương ứng lên màn hình
function kiemTraSo(number) {
  if (number > 0) {
    console.log(number + " là số dương");
  } else if (number < 0) {
    console.log(number + " là số âm");
  } else {
    console.log(number + " bằng 0");
  }
}

kiemTraSo(5);
kiemTraSo(-3);
kiemTraSo(0);

// Dùng câu lệnh if, else if và else để kiểm tra giá trị number và in ra kết quả, gọi function kiemTraSo và truyền các giá trị để kiểm tra.


// Bài tập 3: Kiểm tra số chia hết
// Yêu cầu: Viết một chương trình JavaScript để kiểm tra xem một số cho trước có chia hết cho 3 và 5 hay không. In ra kết quả tương ứng lên màn hình.
function kiemTraSoChiaHet(number1) {
  if (number1 % 3 === 0 && number1 % 5 === 0) {
    console.log(number1 + " chia hết cho cả 3 và 5");
  } else if (number1 % 3 === 0) {
    console.log(number1 + " chia hết cho 3");
  } else if (number1 % 5 === 0) {
    console.log(number1 + " chia hết cho 5");
  } else {
    console.log(number1 + " không chia hết cho cả 3 và 5");
  }
}

kiemTraSoChiaHet(15);
kiemTraSoChiaHet(9);
kiemTraSoChiaHet(10);
kiemTraSoChiaHet(7);
// Dùng toán tử % để kiểm tra xem số cho trước có chia hết cho 3 và 5 hay không, sau đó gọi function và truyền các giá trị để kiểm tra và in ra kết quả


// Bài tập 4: Kiểm tra ngày trong tuần
// Yêu cầu: Viết một chương trình JavaScript để kiểm tra xem một số từ 1 đến 7 tương ứng với ngày trong tuần.
// Sử dụng câu lệnh switch để in ra tên của ngày tương ứng lên màn hình. (sử dụng switch.. case..)
function ngayTrongTuan(weekday) {
  switch (weekday) {
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ hai");
        break;
    case 3:
        console.log("Thứ ba");
        break;
    case 4:
        console.log("Thứ tư");
        break;
    case 5:
        console.log("Thứ năm");
        break;
    case 6:
        console.log("Thứ sáu");
        break;
    case 7:
        console.log("Thứ bảy");
        break;
    default:
        console.log("Số không tương ứng với ngày trong tuần");
  }
}

ngayTrongTuan(1);
ngayTrongTuan(3); 
ngayTrongTuan(6);
ngayTrongTuan(9); 

// lệnh switch để kiểm tra giá trị number và in ra tên ngày trong tuần tương ứng, sau đó gọi function và truyền các giá trị số từ 1 đến 7 để kiểm tra và in ra tên ngày.


// Bài tập 5: Tính tổng các số từ 1 đến n
// Yêu cầu: Viết một chương trình JavaScript để tính tổng của các số từ 1 đến n, với n được nhập từ bàn phím.
// Sử dụng vòng lặp for để tính toán và in ra kết quả lên màn hình.
function tinhTong(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let n = parseInt(prompt("Nhập số n:"));
let tong = tinhTong(n);
console.log("Tổng các số từ 1 đến " + n + " là: " + tong);

// Gọi function tinhTong nhận một tham số n, sau đó vòng lặp for để duyệt từ 1 đến n và cộng giá trị của i vào biến sum.
// Dùng hàm parseInt và prompt để nhận giá trị của n từ người dùng thông qua cửa sổ nhập liệu. Biến n là một số nguyên.
// gọi function và truyền giá trị của n để tính tổng các số từ 1 đến n.



// Bài tập 6: In các số từ 1 đến 10, bỏ qua số 5
// Yêu cầu: Sử dụng vòng lặp for và câu lệnh continue để in ra các số từ 1 đến 10, bỏ qua số 5.
for (let numberA = 1; numberA <= 10; numberA++) {
  if (numberA === 5) {
    continue;
  }
  console.log(numberA);
}
// Kiểm tra nếu i bằng 5, thì sử dụng câu lệnh continue để bỏ qua lần lặp hiện tại và tiếp tục với lần lặp tiếp theo.


// Bài tập 7: Tìm số chia hết cho 3 trong khoảng từ 1 đến 20
// Yêu cầu: Sử dụng vòng lặp for và câu lệnh break để tìm số chia hết cho 3 đầu tiên trong khoảng từ 1 đến 20.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        break;
  }
}

// Nếu thỏa điều kiện chia hết cho 3 (i % 3 === 0), in ra số đó và break để thoát khỏi vòng lặp.


// Bài tập bổ sung
// Bài tập 8: Câu lệnh sau lặp bao nhiêu lần?
// Giải thích for(let i = 0; i < 100; i++) {}

// for(let i = 0; i < 100; i++) {} sẽ thực hiện vòng lặp từ i = 0 đến khi i không còn nhỏ hơn 100. Trong mỗi lần lặp, giá trị của i sẽ tăng lên 1 đơn vị (i++).
// Vì vòng lặp bắt đầu với i = 0 và tiếp tục cho đến khi i không còn nhỏ hơn 100 (i < 100), vòng lặp này sẽ thực hiện chính xác 100 lần. Sau khi thực hiện 100 lần lặp, điều kiện i < 100 sẽ trở thành sai, và vòng lặp sẽ kết thúc.



// Bài tập 9: Vòng lặp do-while và while khác nhau như thế nào ? Giải thích
// Vòng lặp do-while
let testA = 1;
do {
  console.log(testA);
  testA++;
} 
while (testA < 10);

// Vòng lặp while
let testB = 0;
while (testB < 8) {
  console.log(testB);
  testB++;
}

// do-while và while đều là hai cấu trúc vòng lặp nhưng do-while cho phép thực hiện lặp lại phân thân vòng lặp ít nhất một lần trước khi kiểm tra điều kiện của nó, và điều kiện nằm ở cuối vòng lặp
// while thì điều kiện nằm ở đầu vòng lặp, và phải kiểm tra điều kiện trước khi lặp lại phần thân vòng lặp, nếu điều kiện đúng thì phần thân vòng lặp mới được thực hiện
