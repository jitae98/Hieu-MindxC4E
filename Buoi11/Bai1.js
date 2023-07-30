// Bài 1
let N = 12348;

// a. Kiểm tra số chẵn hay số lẻ
let isEvenOrOdd = (N) => (N % 2 === 0 ? "even" : "odd");
console.log(isEvenOrOdd(N));

// b. Là số âm hay số dương
let isPositiveOrNegative = (N) => (N >= 0 ? "positive" : "negative");
console.log(isPositiveOrNegative(N));

// c. Kiểm tra n có phải là số nguyên tố không?
let isPrime = (N) => {
  for (let i = 2; i < Math.sqrt(N); i++) if (N % i === 0) return false;
  return N > 1;
};
console.log(isPrime(N));

// d. Tìm tất cả số nguyên tố nhỏ hơn n
let findPrimes = (N) => {
  let primes = [];
  for (let i = 2; i < N; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};
console.log(findPrimes(N));

// e. In ra màn hình các số chẵn từ 0 đến n
let printEvenNumbers = (N) => {
  for (let i = 0; i <= N; i++) {
    if (i % 2 === 0) console.log(i);
  }
};
printEvenNumbers(N);

// f. In ra màn hình các số lẻ từ 1 đến n
let printOddNumbers = (N) => {
  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) console.log(i);
  }
};
printOddNumbers(N);

// g. Đếm các số chính phương
let countPerfectSquares = (N) => {
  let count = 0;
  for (let i = 1; i * i <= N; i++) {
    count++;
  }
  return count;
};
console.log(countPerfectSquares(N));
