// Date객체
// let 객체명 = new Date();

// Date객체의 주요 메소드
// getFullYear(): 4자리 년도
// getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
// getDate(): 한 달 내의 날짜(28~31)
// getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
// getHours(): 0~23사이의 정수
// getMinutes(): 0~59사이의 정수
// getSeconds(): 0~59사이의 정수
// getMilliseconds(): 0~999사이의 정수
// getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
// setFullYear(year): 년도 저장
// setMonth(month): 월 저장
// setDate(date): 한 달 내의 날짜 값 지정
// setHours(hour): 시간 저장
// setMinutes(minute): 분 저장
// setSeconds(second): 초 저장
// setMilliseconds(ms): 밀리초 저장
// setTime(t): 밀리초 단위인 t값으로 시간 저장

// 생성자에 아무것도 전달하지 않으면 현재 시간
// let now = new Date();
// console.log(now);

// 원하는 날짜 형식을 생성자에 전달하면 해당 시간으로 세팅된다.
// let now = new Date("2024-12-04T02:00:00");
// console.log(now.toLocaleString());

function timeForToday(datetime) {
    const today = new Date();
    const date = new Date(datetime);

    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

    if (gap < 1) {
        return "방금 전";
    }

    if (gap < 60) {
        return `${gap}분 전`;
    }

    gap = Math.floor(gap / 60);

    if (gap < 24) {
        return `${gap}시간 전`;
    }

    gap = Math.floor(gap / 24);

    if (gap < 31) {
        return `${gap}일 전`;
    }

    gap = Math.floor(gap / 31);

    if (gap < 12) {
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap / 12);

    return `${gap}년 전`;
}

console.log(timeForToday("2024-01-29T11:35:00"));
