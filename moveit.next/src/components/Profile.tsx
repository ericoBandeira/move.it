import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
           <img src="https://github.com/ericoBandeira.png" alt=""/> 
           <div>
               <strong>Érico Bandeira</strong>
               <p>Lvl. 1</p>
           </div>
        </div>
    );
}