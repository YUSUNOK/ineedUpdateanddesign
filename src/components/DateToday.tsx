import React, { useEffect, useState } from 'react';

const convertDay: string[] = ["일", "월", "화", "수", "목", "금", "토"];
type Today = [string, string, number];
const DateToday = () => {
    const [today, setToday] = useState<Today>(["", "", -1]);

    useEffect(() => {
        const date = new Date();
        setToday([String(date.getMonth() + 1), String(date.getDate()), (date.getDay())]);
    }, [today[1]]);

    return (
        <div>
            <div>{`${today[0]}월 ${today[1]}일 ${convertDay[today[2]]}요일`}</div>
        </div>
    );
}

export default DateToday;