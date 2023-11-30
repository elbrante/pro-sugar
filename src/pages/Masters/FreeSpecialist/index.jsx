import cl from './FreeSpecialist.module.css'
import {GrayMaster} from "../../../assets/icons";

export const FreeSpecialist = () => {
    return (
        <div className={cl.freeSpecialist}>
            <div className={cl.wrapIcon}>
                <GrayMaster/>
            </div>
            <span className={cl.title}>Любой свободный специалист</span>
        </div>
    );
};

