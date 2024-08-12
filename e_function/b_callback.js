// arrow expression
// 함수 선언 시, 이름이 없는 익명 함수 선언 방법
// const printName = (name) => {
//     console.log(name);
// };

// printName("한동석");

// // 첫 번째, 두 번째 매개변수는 값이지만, 세 번째에 작성된 callback에는 함수가 들어온다.
// const add = (number1, number2, callback) => {
//     // 만약 callback에 아무것도 전달되지 않았다면, undefined이다.
//     // 이는 조건식 자리에 작성할 경우 false를 의미한다.
//     if (callback) {
//         // 만약 callback 함수가 전달되었다면,
//         // 전달받은 callback 함수를 사용한다.
//         // 단, 전달한 함수의 매개변수 구조를 알아야 사용할 수 있다.
//         callback(number1 + number2);
//     }
//     // 만약 callback에 함수를 전달받지 않았다면, 두 정수의 결과를 리턴한다.
//     return number1 + number2;
// };

// // 출력하지 않고 6 리턴
// let total = add(1, 5);

// // 출력하고 6 리턴
// total = add(1, 5, (result) => {
//     console.log(result);
// });

// 1. 두 정수의 곱셈을 구한 뒤
// const multiple = (number1, number2, callback) => {
//     let result = number1 * number2;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };
// // 2. 결과에 2를 곱해서 출력
// const printResult = (result) => {
//     console.log(result * 2);
// };

// multiple(3, 5, printResult);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//         return;
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(fullName + "님");
// };

// makeFullName("동석", "한", printFullName);
// // let result = makeFullName("동석", "한");
// // console.log(result);

// // 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// // 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = price / total;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// let check = getCount(140000, 70000, checkLessEqaulThan5);
// console.log(check);

// let count = getCount(140000, 70000);
// console.log(count);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const setStatus = (price, status, callback) => {
//     if (callback) {
//         callback(status ? price + "원 결제 완료" : price + "원 결제 취소");
//     }
// };

// setStatus(3000, true, console.log);

// 템플릿 문법
// let price = 1000;
// console.log(`${price}원`);
// let status = true;
// status ? `${price}원 결제 완료` : `${price}원 결제 취소`;

// 문제 3개 만들어서 팀원에게 공유

// 1.
// 방문자의 이름과 나이 정보를 받아서 나이가 20세 이상이라면 "000님은 성인입니다."를
// 출력하고, 20세 미만이라면 미성년자 출입제한을 출력한다.

// const getInfo = (name, age, callback) => {
//     if (callback) {
//         callback(name, age);
//     }

// return name;
// };

// const checkAge = (name, age) => {
//     let result = "";
//     result = age >= 20 ? `${name}님은 성인입니다.` : "미성년자 출입제한";
//     console.log(result);
// };

// getInfo("홍길동", 21, checkAge);

// 2.
// 자동차 번호판 정보, 과속 단속구간 진입 시 속도(km/h)와 이탈 시 속도에 대한 정보를
// 받는다. 자동차의 평균속도가 과속 단속 기준 속도에서 10(km/h) 초과했다면 번호판
// 정보와 "벌금 부과" 문구를 출력하고, 초과하지 않았다면 "정상 주행" 문구를 출력한다.
// 단속 기준 속도는 100(km/h)이다.

// const getCarInfo = (carNumber, enterSpeed, leaveSpeed, callback) => {
//     if (callback) {
//         callback(carNumber, enterSpeed, leaveSpeed);
//     }

//     return carNumber;
// };

// const judgeIllegality = (carNumber, enterSpeed, leaveSpeed) => {
//     let result = "";
//     let avgSpeed = 0;
//     avgSpeed = (enterSpeed + leaveSpeed) / 2;
//     result = avgSpeed > 110 ? `${carNumber} 벌금 부과` : "정상 주행";
//     console.log(result);
// };

// getCarInfo("29마 7762", 83, 140, judgeIllegality);

// 3.
// 학생의 이름과 국어, 영어, 수학 점수를 입력받는다. 70점보다 낮은 과목이 하나
// 라도 있을 경우에는 이름과 "낙제" 문구를 출력하고, 그렇지 않다면 이름과 평균점수를
// 출력한다.
