const fruit = ["Apple", "Strawberry", "Banana"];
// a. Them 2 phan tu vao mang o vi tri so 2, "Rose", "Tulip"

const corn = ["Rose", "Tulip"];
fruit.splice(2, 0, "Rose", "Tulip");
document.write(fruit);

// b. Cho mang B = ["Apple_Version1", "Strawberry_Version1", "Banana_Version1"]
// Tao mang moi C = A + B;
const newVerFruit = [
  "Apple_Version1",
  "Strawberry_Version1",
  "Banana_Version1",
];
const newArr = fruit.concat(newVerFruit);
document.write("</br>", newArr);

// c. Xoa phan tu thu 3 cua mang C (thứ 2)
newArr.splice(3, 1);
document.write("</br>", newArr);

// d. Tạo 1 Array gồm 5 phần tử với 1 phần tử bên trong Object có key là name, age
// vd: A = [{name: Name1, age: 19}]
const aPax = [
  {
    name: "Liam",
    age: 22,
  },
  {
    name: "Andy",
    age: 20,
  },
  {
    name: "Mary",
    age: 40,
  },
  {
    name: "David",
    age: 49,
  },
  {
    name: "Daniel",
    age: 55,
  },
];
// Viết function trả về mảng mới chỉ chứa name,
// Vd: Mang moi X = ["Name", "Name2"]
function getNameArray(arr) {
  return arr.map((item) => item.name);
}

const nameArray = getNameArray(aPax);
console.log(nameArray);

// Viết function trả về tổng trung bình của tuổi từng phần tử bên trong
function getAverageAge(arr) {
  const sum = arr.reduce((total, item) => total + item.age, 0);
  const average = sum / arr.length;
  return average;
}

const averageAge = getAverageAge(aPax);
console.log(averageAge);
