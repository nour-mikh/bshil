import { signInWithGoogle } from "../firebase/config"
import s from '../../public/media/s.jpg'
import RecomRest from '../components/recomRest';

const Index = () => {
    return(
        <>
        <section id="landing">
            <div>
                <h1>Bt shil? Bshil!</h1>
                <h3>Stop worrying about placing the wrong orders.</h3>
                <button onClick={signInWithGoogle}> <h4>Let's Start!</h4></button>
            </div>

            <img id="landingPic" src={s.src}/>
        </section>

        <section id="recomList">
            <RecomRest img={s.src} title="g4rg" description="rbef"/>
        </section>
        </>
    )
}

export default Index;