function solution(progresses, speeds) {
  var answer = [0]; // 최종 값
  let index = 0; // 최종 값에 사용되는 인덱스
  // 작업시간 구하기 -> 100에서 완료된 만큼 빼고 해당 작업의 속도로 나눈 뒤 올림 연산하기
  const days = progresses.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );
  let maxDay = days[0]; // 최대 작업 소요시간? -> 이거 보다 낮은 작업 만큼 한번에 배포 가능

  days.forEach((day) => {
    if (day <= maxDay) {
      // 최대 작업 소요시간 보다 낮으면
      answer[index] += 1; // 낮은 만큼 ++
    } else {
      // 최대 작업 소요시간 보다 높으면
      maxDay = day; // 최대 작업 소요시간 업데이트
      answer[++index] = 1; // 현재 최종 값 인덱스 다음 인덱스에서 새로운 시작
    }
  });
  return answer;
}

// Test code
const progresses = [93, 30, 55];
const speed = [1, 30, 5];
//[5, 10, 1, 1, 20, 1] [1, 3, 2]
console.log(solution(progresses, speed));
