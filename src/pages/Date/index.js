import React, {useState} from 'react';
import cl from './Date.module.css'
import classNames from "classnames";

import {TimePerDay} from "../../components/TimePerDay";
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";

export const DatePage = () => {
    const [chosenDay, setChosenDay] = useState(new Date().getDate());

    const timePerDay = {
        17: {
            morning: ['10:00', '11:00'],
            day: ['12:00', '13:00'],
            evening: ['19:00', '21:00'],
        },
        18: {
            morning: ['10:00', '11:00'],
            day: ['12:00', '13:00'],
            evening: ['20:00', '22:00'],
        }
    }

    const daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('ru', { month: 'long' });

    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    const nextMonth = nextMonthDate.toLocaleString('ru', { month: 'long' });

    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(currentDate.getMonth() - 1);
    const prevMonth = prevMonthDate.toLocaleString('ru', { month: 'long' });

    const [monthDisplayed, setMonthDisplayed] = useState(currentMonth);

    const days = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        days.push(date);
    }


    return (
        <div className={cl.date}>
            <div className={cl.firstBlock}>
                <Header link={'/'} text={'Дата и время'}/>
                <div className={cl.wrapperDateCalendar}>
                    <section className={cl.dates}>
                        <div className={cl.dates_months}>
                            <div className={cl.dates_month_not_current}>{prevMonth}</div>
                            <div className={cl.dates_month_current}>{monthDisplayed}</div>
                            <div className={cl.dates_month_not_current}>{nextMonth}</div>
                        </div>
                        <ul className={cl.dates_item}>
                            {days.map((day, index) => {
                                const dayOfMonth = day.getDate();
                                const dayOfWeekName = daysOfWeek[day.getDay()];

                                if (dayOfMonth === 1 && day.toLocaleString('ru', { month: 'long' }) !== monthDisplayed) {
                                    setMonthDisplayed(day.toLocaleString('ru', { month: 'long' }));
                                }


                                return (
                                    <li key={index} className={cl.date_item}
                                        onClick={() => {

                                            setChosenDay(dayOfMonth)
                                            localStorage.setItem('currentDay', dayOfMonth);
                                            localStorage.setItem('currentMonth', currentMonth)
                                        }}>
                                        <span>{dayOfWeekName}</span>
                                        <button className={classNames(cl.date_item__chosen_day,
                                            {[cl.active]: chosenDay === dayOfMonth})}>{dayOfMonth}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    <TimePerDay
                        times={timePerDay[chosenDay]?.morning}
                        title="Утро"
                    />
                    <TimePerDay times={timePerDay[chosenDay]?.day}
                                title="День"
                    />
                    <TimePerDay
                        times={timePerDay[chosenDay]?.evening}
                        title="Вечер"
                    />

                </div>
            </div>
            <div className={cl.wrapSkip}>
                <SkipButton link={'/address'}/>
            </div>
        </div>
    );
};

