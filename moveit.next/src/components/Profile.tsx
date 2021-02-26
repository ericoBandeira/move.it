import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
           <img src="https://github.com/ericoBandeira.png" alt=""/> 
           <div>
               <strong>Érico Bandeira</strong>
               <p>
                   <img src="icons/level.svg" alt="Level"></img>
                   Lvl. 1
                </p>
           </div>
        </div>
    );
}