import  {useContext} from 'react';
import LanguageContext from './LanguageContext';

const Greeting = () => {
    const language = useContext(LanguageContext)

    const message = {
        en: 'Hello',
        es: 'Hola'
    }
    return (
        <div>
            <h1>{message[language]}</h1>
        </div>
    );
}

export default Greeting;
