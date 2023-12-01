import Head from 'next/head';
import styles from './Page.module.css';

// Function to calculate the number of days since a given date
function calculateDaysSince({dateString}: { dateString: any }) {
    const startDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

const Page = () => {
    // Use the function to calculate the number of days since June 30, 2013
    const daysSince = calculateDaysSince({dateString: "2013-06-30"});

    return (
        <div className={styles.backgroundImage}>
            <Head>
                <title>It has been {daysSince} days since we met</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* The main content of the page */}
            <div className={styles.fullscreenWrapper}>
                <div className={styles.content}>
                    It has been <span className={styles.xxx}>{daysSince}</span> days since we met
                </div>
            </div>
        </div>
    );
}

export default Page;
