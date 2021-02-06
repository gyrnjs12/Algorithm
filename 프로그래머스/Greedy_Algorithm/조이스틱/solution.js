// 1. 각 자리에 있는 알파벳을 순차로 구하는게 빠른지, 역순으로 구하는게 빠른지 구하기
//  - 각 자리의 아스키 코드 값을 구한다.
//  - 아스키 코드값의 따라서 정해진 규칙을 적용
// 2. "A"를 만났을때 왼쪽으로 가는게 빠른지, 오른쪽으로 가는게 빠른지 구하기
//  - 되돌아가야하는 거리가 앞으로 연속되는 "A"의 길이보다 짧으면 뒤로가는게 효율적이다.
//  - 되돌아가야하는 거리는 "A" 가 나오기 바로 전 index 번호와 같다.
//  -  ex) "BBAAAB" -> A 개수 3, A 직전 index: 2 -> 2번 뒤로 가기
function solution(name) {
  const arr = [0]; // "A"를 만날때마다 왼쪽으로 돌아가면 줄일 수 있는 이동횟수 값
  const answer = [...name].reduce((answer, s, i) => {
    // 문자열의 문자가 "A" 면서, 그 전 문자가 "A" 가 아닌 경우
    // 즉, 처음으로 등장한 "A" 라면
    if (s === "A") {
      // "A" 의 개수를 구한 뒤, 현재 인덱스에서 -1 한 값을 arr에 넣어주기
      if (name[i - 1] !== "A") arr.push(aCount(name.substring(i)) - (i - 1));
      return answer + 1; // 한 문자 종료 후 우측으로 이동으로 인한 + 1
    }
    return answer + ascii(name, i) + 1;
  }, 0);
  return answer - Math.max(...arr) - 1; // 최대로 줄일 수 있는 이동횟수를 빼고, index 0일때도 이동거리가 정해졌으므로 빼기
}
function aCount(name) {
  // "A" 개수 새기
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break;
    count++;
  }
  return count;
}

function ascii(name, i) {
  // 이동 값 구하기
  // 알파벳의 중간인 N을 아스키로 변환하면 78
  // 78보다 크면 뒤로 Z로 돌아가서 새기 -> Z로 돌아가는 것도 이동횟수에 추가 되므로 90이 아닌 91에서 빼기
  // 78보다 작으면 A부터 새기 -> 65를 빼준다.
  let item = name.charCodeAt(i);
  return item > 78 ? 91 - item : item - 65;
}
