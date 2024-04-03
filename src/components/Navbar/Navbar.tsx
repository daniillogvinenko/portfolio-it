import { useState } from "react";
import classes from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import closeIcon from "../../assets/icons/close.png";
import openIcon from "../../assets/icons/burger.png";

const navLinks: { title: string; href: string }[] = [
    {
        title: "Главная",
        href: "/",
    },
    {
        title: "Обо мне",
        href: "/about",
    },
];

export const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const linkVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            },
        },
    };

    const linkContainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header>
            <div onClick={toggleMenu} className={classes.openBtn}>
                <img src={openIcon} alt="" />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={classes.container}
                    >
                        <div className={classes.flexCol}>
                            <div className="container">
                                <div className={classes.header}>
                                    <div></div>
                                    <div onClick={toggleMenu}>
                                        <img src={closeIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                variants={linkContainerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className={classes.links}
                            >
                                {navLinks.map((link, index) => (
                                    <div onClick={toggleMenu} key={index} className={classes.linkWrapper}>
                                        <motion.div variants={linkVariants}>
                                            <NavLink className={classes.linkItem} to={link.href}>
                                                {link.title}
                                            </NavLink>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
