import cl from './TimePerDay.module.css';
import classNames from "classnames";

export const TimePerDay = ({ times, title}) => {


    return (
        <div className={cl.time_day}>
            <p>{title}</p>
            <ul>

                {
                    times === undefined || null
                        ?
                        <p>Записей на эту дату нет</p>
                        :
                        times?.map((time, index) => {
                            return (
                                <li key={index}
                                    className={classNames({[cl.active]: localStorage.getItem('currentTime') === time})}
                                    onClick={() => {
                                        localStorage.setItem('currentTime', time)
                                    }

                                    }>
                                    {time}
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    );
};