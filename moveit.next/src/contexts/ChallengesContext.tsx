import{createContext,useState, ReactNode} from 'react';
import { render } from 'react-dom';
import challenges from '../../challenges.json'

interface Challenge{
    type: 'body' | 'eye'
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience:number ;
    challengesCompleted: number;
    activeChallenge: object;
    levelUp: () => void;
    startNewChallenge: () => void ;
}

interface ChallengesProviderProps{
    children: ReactNode; 
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurremtExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted]= useState(0); 

    const [activeChallenge, setActiveChallenge] = useState(null)

    function levelUp(){
        useState(level+1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() *challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    return(
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    );
}
