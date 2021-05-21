import React from 'react'
import styles from './Loading.css';

const LoadingSpinner = () => { 
    return(
        <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    );
}

export default LoadingSpinner;