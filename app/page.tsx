"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './styles/Page.module.css';

export const config = {
    runtime: 'edge',
};

const Page = () => {
    const [daysSince, setDaysSince] = useState(0);

    useEffect(() => {
        const startDate = new Date('2013-06-30');
        const today = new Date();
        const timeDiff = today.getTime() - startDate.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        setDaysSince(days);
    }, []);

    return (
        <div className={styles.backgroundImage}>
            <Head>
                <title>It has been {daysSince} days since we met</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className={styles.fullscreenWrapper}>
                <div className={styles.content}>
                    It has been <span className={styles.xxx}>{daysSince}</span> days since we met
                </div>
            </div>
        </div>
    );
}

export default Page;
