'use client'
import styles from './PopUp.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
// import { PupUpProps } from './PopUp.props';
// import cn from 'classnames';
// import { IoMdClose } from "react-icons/io";
import { GrClose } from "react-icons/gr";


export default function PopUp({ children, isOpen = false, setOpened }) {

    return (
        <AnimatePresence mode='wait'>
            {isOpen &&
                <motion.div className={styles.body}
                    initial={{ y: '-100%' }}
                    animate={{ y: "0" }}
                    exit={{ y: '100%' }}
                    transition={{ type: "tween" }}
                >
                    <div className={styles.container}>
                        {children}
                        <motion.button className={styles.close} onClick={() => setOpened(false)} whileHover={{ rotate: 180 }}>
                        <GrClose size={30} />
                        </motion.button>
                    </div>
                    <div className={styles.bg} onClick={() => setOpened(false)}></div>
                </motion.div>
            }
        </AnimatePresence>
    )

}