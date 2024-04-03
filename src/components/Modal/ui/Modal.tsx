import { useState } from "react";
import classes from "./Modal.module.scss";
import { Button } from "../../Button";
import closeIcon from "../../../assets/icons/close.png";

export const Modal = () => {
    const [isOpen, setisOpen] = useState(!localStorage.getItem("hasOpened"));

    const handleClose = () => {
        setisOpen(false);
    };

    const handleDontShow = () => {
        localStorage.setItem("hasOpened", "been opened");
        setisOpen(false);
    };

    return (
        <div onClick={handleClose} style={{ display: isOpen ? "flex" : "none" }} className={classes.overlay}>
            <div onClick={(e) => e.stopPropagation()} className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <div></div>
                    <img onClick={handleClose} src={closeIcon} alt="" />
                </div>
                <div>
                    <p>К сожаленю на данный момент сайт корректно работает только на экранах шириной: </p>

                    <p>375 пикселей</p>
                    <p>Более 1300 пикселей</p>
                </div>
                <Button onClick={handleDontShow}>Больше не показывать</Button>
            </div>
        </div>
    );
};
