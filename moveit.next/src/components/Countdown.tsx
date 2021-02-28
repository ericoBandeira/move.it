import styles from '../styles/components/Countdown.module.css';
import {useState, useEffect, useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const{ startNewChallenge } = useContext(ChallengesContext)

    const[time, setTime]= useState(0.1*60);
    const[isActive,setisActive]= useState(false)
    const[hasFinished, sethasFinished] = useState(false);

    const minutes = Math.floor(time /60); // arredondar para baixo
    const seconds = time % 60;

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('') // completar números com menos de 2 caracteres com o '0' no começo
    const [secondLeft,secondRight]= String(seconds).padStart(2,'0').split('') 

    function startCountdown(){
        setisActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setisActive(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1);
            },1000)
        }
        else if(time == 0){
            sethasFinished(true);
            setisActive(false);
        }
    },[isActive, time]) //aciona um efeito colateral, primeiro parametro é oq vai acontecer, o segundo é quando

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                <button disabled className={styles.startCountdownButton }>
                Ciclo encerrado
                </button>
            ):
            (
                <>
                {isActive ?(
                    <button type="button" className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`} onClick={resetCountdown}>
                    Abandonar ciclo
                    </button>
                ):
                    <button type="button" className={styles.startCountdownButton} onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
                }
                </>
            ) }

            
           
        </div>
    );
}