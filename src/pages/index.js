import { signInWithGoogle } from "../firebase/config"
import s from '../../public/media/s.png'
import s1 from '../../public/media/group-3@2x.png'
import s2 from '../../public/media/group-2@2x.png'
import s3 from '../../public/media/group-4@2x.png'

import Link from "next/link"

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

        <section className="bg-red-100 flex flex-row justify-evenly">
        <Link href="/CFC">
            <div className="w-52 rounded overflow-hidden shadow-lg m-8 bg-gray-100 hover:bg-gray-200">
                <img className="w-48 h-48 ml-2 mt-2" src={s1.src}/>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">CFC</div>
                    <p className="text-gray-700 text-base">
                    CFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation.
                    </p>
                </div>
            </div>
        </Link>


        <Link href="/Wcdonalds">
            <div className="w-52 rounded overflow-hidden shadow-lg m-8 bg-gray-100 hover:bg-gray-200">
                <img className="w-48 h-48 ml-2 mt-2" src={s2.src}/>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">Wcdonald's</div>
                    <p className="text-gray-700 text-base">
                    American fast-food chain that is one of the largest in the world, known for its hamburgers, especially its Big Wacs.
                    </p>
                </div>
            </div>
        </Link>


        <Link href="/LegosPizza">
            <div className="w-52 rounded overflow-hidden shadow-lg m-8 bg-gray-100 hover:bg-gray-200">
                <img className="w-48 h-48 ml-2 mt-2" src={s3.src}/>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">Lego's Pizza</div>
                    <p className="text-gray-700 text-base">
                    Largest pizza company in the world, Lego's proudly continues its legacy of delivering great pizza to customers' doors.
                    </p>
                </div>
            </div>
        </Link>
        </section>
        </>
    )
}

export default Index;