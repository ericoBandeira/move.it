import styles from '../styles/components/Countdown.module.css';
import {useState, useEffect} from 'react';


export function Countdown(){
    const[time, setTime]= useState(25*60);
    const[active,setActive]= useState(false)

    const minutes = Math.floor(time /60); // arredondar para baixo
    const seconds = time % 60;

    const [minuteLeft,minuteRight]= String(minutes).padStart(2,'0').split('') // completar números com menos de 2 caracteres com o '0' no começo
    const [secondLeft,secondRight]= String(seconds).padStart(2,'0').split('') 

    function startCountdown(){
        setActive(true);
    }

    useEffect(()=>{
        if(active && time > 0){
            setTimeout(()=>{
                setTime(time-1);
            },1000)
        }
    },[active, time]) //aciona um efeito colateral, primeiro parametro é oq vai acontecer, o segundo é quando

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
            <button type="button" className={styles.startCountdownButton} onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        </div>
    );
}