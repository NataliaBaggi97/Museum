import arti from './art/arti.jpg';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import wow from './art/wow.png';
import qvadrat5 from './desigh/qvadrat5.png'
import Union1 from './desigh/Union1.png'
import qvadratpath4 from './desigh/qvadratpath4.png'
import qvadratpath3 from './desigh/qvadratpath3.png'



const Exhibition = ({language}) => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Libre Bodoni', 'Chathura','Grape Nuts']
          }
        });
       }, []);

    const hours = {'EN':"Working hours",'LV':"Darba stundas",'JP':"労働時間"}
    const buy = {'EN':"Buy ticket",'LV':"Pirkt biļeti",'JP':"チケットを購入"}


    return(
        <div className="bg-amber-100 h-screen grid grid-rows-3 grid-flow-col gap-0">   
                <h2 className=' flex items-end pb-6 pl-24 font-nuts text-6xl'>{hours[language]}</h2>
                <div>
                    <ul className='grid grid-cols-2 w-96 gap-3 pl-32'>
                        <li className='font-nuts text-lg'>MON:</li>
                        <li className='font-nuts'>12.00-20.00</li>
                        <li className='font-nuts text-lg'>TUE:</li>
                        <li className='font-nuts'>12.00-18.00</li>
                        <li className='font-nuts text-xl'>WED-SUT:</li>
                        <li className='font-chathura text-3xl'>closed</li>
                    </ul>
                </div>
                <img src={wow} alt="wow" className='absolute left-96 bottom-6'/>
                <h2 className='flex justify-end pt-12 pr-8 font-nuts text-3xl'>{buy[language]}</h2>
            <div className='pt-16 pl-28'>
                <img src={arti}
                alt="arti"
                className='h-96'/>
            </div>
                <div></div>
                <div className="absolute right-40 bottom-10">
                    <h2 className='text-2xl absolute left-64 bottom-0 pb-3 font-nuts'>3.</h2>
                    <hr className=" bg-black h-0.5 w-72"></hr>
                </div>
                <img src={qvadrat5} alt='' className='absolute right-3 bottom-12'/>
                <img src={Union1} alt='' className='absolute left-1/3 top-96'/>
                <img src={qvadratpath4} alt='' className='absolute'/>
                <img src={qvadratpath3} alt='' className='absolute right-24 top-52'/>

        </div>
    )
}


export default Exhibition;