function solution(n, lost, reserve) {
  var answer = 0;
  let arr = [];
  for (var i = 0; i <= n; i++) {
    // 체육복 분배 시작
    arr.push(1); // 모든 학생에게 일단 체육복 1개씩 주기
    if (reserve.includes(i)) arr[i - 1]++; // 여분이 있는 학생이면 체육북 하나 추가(++)
    if (lost.includes(i)) arr[i - 1]--; // 잃어버린 학생이면 체육복 하나 없앰(--)
  } // 체육복 분배 완료
  for (var i = 0; i < n; i++) {
    // 1. 체육복 0개면 뒷 번호 친구에게 빌리기
    // 2. 뒷 번호 친구도 1개 이하밖에 없다 -> 다음 친구꺼 빌리기
    if (arr[i] === 0) {
      // 체육복이 없으면
      if (arr[i + 1] === 2) {
        // 앞 친구가 여분의 체육복이 있다면
        arr[i]++; // 체육복 빌리고
        arr[i + 1]--; // 친구 체육복은 빼고
      } else if (arr[i - 1] === 2) {
        // 뒷 친구가 여분의 체육복이 있다면
        arr[i]++; // 체육복 빌리고
        arr[i - 1]--; // 친구 체육복은 빼고
      }
    }
  }
  for (var i = 0; i < n; i++) {
    // 체육복 1개 이상인 학생 수 새기 -> 체육수업 들을 수 있는 학생 수
    if (arr[i] >= 1) answer++;
  }
  console.log(arr);
  return answer;
}
console.log(solution(8, [1, 2, 4, 6], [1, 2, 4, 6]));
