'use client'
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import styles from './Menu.module.scss';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function Menu({ ...props }) {
    const router = usePathname();
    const tabs = [
        { title: 'Home', link: '/homepage' },
        { title: 'Add Users', link: '/add' },
        { title: 'Show users', link: '/show/0' }
    ];

    const [selectedTab, setSelectedTab] = useState(tabs.find(tab => tab.link === router) || tabs[0]);

    const handleClick = (item) => {
        setSelectedTab(item);
    };

    return (
        <nav {...props}>
            <ul className={styles.list}>
                {tabs.map((item) => (
                    <li 
                    key={item.title} 
                    className={item === selectedTab ? styles.active : ''} 
                    onClick={() => handleClick(item)}>
                        <Link href={item.link}>{item.title}</Link>
                       
                    </li>
                ))}
            </ul>
        </nav>
    );
}
