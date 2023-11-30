import cl from './TimeBlock.module.css'
import {useState} from "react";
import classNames from "classnames";

export const TimeBlock = ({children, setChoiceID, id}) => {

    const [choice, setChoice] = useState(false)

    function sendIdMaster() {
        setChoice(!choice)
        if (!choice) {
            setChoiceID(id)
        } else {
            setChoiceID(null)
        }
    }

    return (
        <div className={
            classNames({
                [cl.timeBlock]: true,
                [cl.timeNotChoice]: !choice,
                [cl.timeChoice]: choice,
            })}
             onClick={sendIdMaster}

        >
            <span className={cl.time}>{children}</span>
        </div>
    );
};

