const daysInMonth = (N) => {
  switch (N) {
    case 2:
      return `Tháng ${N} có 28 hoặc 29 ngày (tuỳ năm nhuận).`;
    case 4:
    case 6:
    case 9:
    case 11:
      return `Tháng ${N} có 30 ngày.`;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return `Tháng ${N} có 31 ngày.`;
    default:
      return `Giá trị không hợp lệ. Vui lòng nhập từ 1 đến 12.`;
  }
};

console.log(daysInMonth(2)); // khi nhập N = 2
console.log(daysInMonth(8)); // khi nhập N = 8
console.log(daysInMonth(12)); // khi nhập N = 12
