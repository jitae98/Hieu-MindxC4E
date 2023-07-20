// Câu 1:
const array = [
  [
    { name: "Hoàng", score: 2 },
    { name: "Long", score: 4 },
  ],
  [
    { name: "Tú", score: 100 },
    { name: "Linh", score: 10 },
  ],
  [
    { name: "Ngọc", score: 1 },
    { name: "Long Lê", score: 9 },
  ],
];

function newNameAndScore(dex) {
  const newHub = dex.flatMap((subArr) => subArr);
  newHub.sort((a, b) => a.score - b.score);
  return newHub;
}

const result = newNameAndScore(array);
console.log(result);

// function newNameAndScore(arr) {: khai báo hàm newNameAndScore với tham số dex
// const newHub = dex.flatMap(subArr => subArr);: sử dụng flatMap để trải phẳng mảng con trong mảng dex.
// newHub.sort((a, b) => a.score - b.score);: sử dụng phương thức sort để sắp xếp mảng newHub theo điểm score của từng đối tượng.
// return newHub;: hàm trả về mảng đã sắp xếp newHub chứa các đối tượng với tên và điểm được sắp xếp theo thứ tự tăng dần.

// Câu 2:
const array1 = [
  ["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
  ["Bai_01", "Bai_03"],
  ["Bai_02", "Bai_04", "Bai_01"],
  ["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
  ["Bai_04", "Bai_03", "Bai_02", "Bai_01"],
];

function newLesson(mix) {
  const newResult = {};

  for (let m = 0; m < mix.length; m++) {
    const lessonList = mix[m];
    for (let n = 0; n < lessonList.length - 1; n++) {
      const currentLesson = lessonList[n];
      const nextLesson = lessonList[n + 1];
      newResult[currentLesson] = nextLesson;
    }
  }

  return newResult;
}

const lessonObject = newLesson(array1);
console.log(lessonObject);
// Tạo 1 Object có tên newResult để lưu các key-value mới
// for (let m = 0; m < mix.length; m++) { Dùng for để lặp qua các phần tử trong mảng tên mix
// Gán phần tử thứ m của mảng mix vào biến lessonList. lessonList là một mảng chứa danh sách bài học của một lớp học.
// for (let n = 0; n < lessonList.length - 1; n++) {: Bắt đầu vòng lặp for thứ hai, lặp qua các phần tử trong mảng lessonList trừ phần tử cuối cùng.
// const currentLesson = lessonList[j];: Gán phần tử thứ n của lessonList vào biến currentLesson, đây là bài học hiện tại.
// const nextLesson = lessonList[n + 1];: Gán phần tử thứ n+1 của lessonList vào biến nextLesson, đây là bài học kế tiếp.
// newResult[currentLesson] = nextLesson;: Gán giá trị nextLesson vào object newResult với key là currentLesson
// tạo ra cặp key-value tương ứng giữa bài học hiện tại và bài học kế tiếp.
// Sau khi kết thúc vòng lặp thứ hai, lặp qua toàn bộ mảng lessonList và tạo các cặp key-value cho bài học hiện tại và bài học kế tiếp trong mảng này.
