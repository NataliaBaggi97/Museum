import markrothko from './art/markrothko.jpg'
import large from './art/large.jpg'
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Union1 from './desigh/Union1.png'

const Author = ({ language }) => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Libre Bodoni', 'Chathura']
      }
    });
   }, []);

    const text = {'EN':"Mark Rothko sought to make paintings that would bring all people tj tears.",
        'LV':"Marks Rotko centās radīt gleznas, kas visiem cilvēkiem sagādātu asaras.",
        'JP':"マーク・ロスコは、すべての人を泣かせるような絵を作ろうとしました。"}
    const text1 = {'EN':"For him, art was a profound form of communication, and art making was a moral act.",
        'LV':"Viņam māksla bija dziļš komunikācijas veids, un mākslas veidošana bija morāls akts.",
        'JP':" 彼にとってアートはコミュニケーションの深遠な形態であり、アート制作は道徳的な行為でした"}
    const text2 ={'EN':"I wanna see it",'LV':"Es gribu to redzēt",'JP':"私はそれを見たいです"}

    return(
        <div className="h-screen w-full bg-amber-100">
            <div className='grid grid-cols-2 '>
            <div className='justify-self-center py-20'>
                <h2 className='font-chathura text-4xl pl-14'>{text[language]}</h2>
            </div>
             <img src={Union1} alt="Union1" className='absolute top-28 left-3'/>
            <div className='justify-self-end'>
                <img src={large}
                 alt="large"
                 className='h-96'
            /></div>
            <div className='justify-self-center'>
                <img src={markrothko}
                 alt="mark"
                 className="h-96 w-96 absolute top-72 left-24 "/></div>
            <div>
                 <h2 className='font-chathura pt-8 text-4xl'>{text1[language]}</h2>
                 <h2 className='flex justify-end pr-60 pt-10 font-chathura text-4xl'>{text2[language]}</h2></div>
            </div>
                 <div className="absolute right-40 bottom-10">
                    <h2 className='text-2xl absolute left-64 bottom-0 pb-3 font-nuts'>2.</h2>
                    <hr className=" bg-black h-0.5 w-72"></hr>
                </div>
        </div>
    )
}


export default Author;