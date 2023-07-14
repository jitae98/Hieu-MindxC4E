// 1. Viết kiểm tra số nguyên có 1 số đưa vào là N
function kiemTraSoNguyen(n) {
  if (Number.isInteger(n)) {
    console.log(n + " là số nguyên.");
  } else {
    console.log(n + " không phải là số nguyên.");
  }
}

kiemTraSoNguyen(5);
kiemTraSoNguyen(3.14);

// 2. Viết kiểm tra 1 số N đầu vào có phải là số nguyên tố hay không
function kiemTraSoNguyenTo(n) {
  if (n <= 1) {
    console.log(n + " không phải là số nguyên tố.");
  } else {
    let aPax = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        aPax = false;
        break;
      }
    }
    if (aPax) {
      console.log(n + " là số nguyên tố.");
    } else {
      console.log(n + " không phải là số nguyên tố.");
    }
  }
}

kiemTraSoNguyenTo(7);
kiemTraSoNguyenTo(10); 

// 3. Viết kiểm tra số đó là sổ lẻ hay số chẵn
function kiemTraSoLeChan(n) {
  if (n % 2 === 0) {
    console.log(n + " là số chẵn.");
  } else {
    console.log(n + " là số lẻ.");
  }
}

kiemTraSoLeChan(5);
kiemTraSoLeChan(10);

// 4. Viết chương trình đếm các số chính phương nhỏ hơn số nhập vào
function soChinhPhuong(n) {
  if (n < 0) {
    console.log("Số nhập vào là số âm. Không có số chính phương nhỏ hơn.");
  } else {
    console.log("Các số chính phương nhỏ hơn " + n + ":");
    for (let i = 0; i * i < n; i++) {
      console.log(i * i);
    }
  }
}

soChinhPhuong(14);
soChinhPhuong(-28);
