import ExperienceBar from '../components/ExperienceBar';
import Head from 'next/head';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>  
      <Head>
        <title>Inicio | Movit</title>
      </Head>

      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown></Countdown>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
