console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(undefined || null || 0); // 0

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "아무거나 와도 상관 없습니다.");
