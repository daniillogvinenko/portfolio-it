import { useState } from "react";
import classes from "./Modal.module.scss";
import { Button } from "../../Button";
import closeIcon from "../../../assets/icons/close.png";

export const Modal = () => {
    const [isOpen, setisOpen] = useState(!localStorage.getItem("hasOpened"));
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setisOpen(false);
            setIsClosing(false);
        }, 100);
    };

    const handleDontShow = () => {
        localStorage.setItem("hasOpened", "been opened");
        setIsClosing(true);
        setTimeout(() => {
            setisOpen(false);
            setIsClosing(false);
        }, 100);
    };

    return (
        <div onClick={handleClose} style={{ display: isOpen ? "flex" : "none" }} className={classes.overlay}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={classes.modalContent + " " + (isClosing ? classes.modalIsClosing : "")}
            >
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
