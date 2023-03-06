import mr1 from './art/mr1.jpg'
import mrothko from './art/mrothko.jpg'
import { Link } from "react-router-dom";
import museumof from './art/museumof.png'
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import union from './desigh/union.png'
import wow from './art/wow.png';

const Contacts = ({language}) => {
    const contact = {'EN':"Contact us",'LV':"Sazinies ar mums",'JP':"お問い合わせ"}
    const location = {'EN':"LOCATION",'LV':"ATRAŠANĀS VIETA",'JP':"位置"}
    const museumofart = {'EN':"Museum Of Art",'LV':"Mākslas muzejs",'JP':"美術館"}
    const larkin = {'EN':"200 Larkin St",'LV':"200 Larkin St",'JP':"200 ラーキン ストリート"}
    const sanfrancisco= {'EN':"San Francisco",'LV':"San Francisco",'JP':"サンフランシスコ"}
    const homepage = {'EN':"Home page",'LV':"Mājas lapa",'JP':"ホームページ"}
    const exbition = {'EN':"Exbition",'LV':"Izstāde",'JP':"展示"}
    const hours = {'EN':"HOURS",'LV':"STUNDAS",'JP':"時間"}
    const terms = {'EN':"Terms and Conditions",'LV':"Noteikumi un nosacījumi",'JP':"規約と条件"}
    const privacy = {'EN':"Privacy Policy",'LV':"Privātuma politika",'JP':"プライバシーポリシー"}
    const closed = {'EN':"closed",'LV':"slēgts",'JP':"閉まっている"}
    const exlopre = {'EN':"EXPLORE",'LV':"IZPĒTĪT",'JP':"探検"}

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Libre Bodoni', 'Chathura']
          }
        });
       }, []);
    


    return(
        <div className="bg-amber-100 h-screen">
            <div className="h-1/2 w-full flex flex-row justify-between px-2">
                <div className="h-full ">  
                    <img src={mrothko}
                    alt='mrothko'
                    className='h-full pl-10'
                    />
                </div>
                <div className= "">
                <div className="h-1/2 flex justify-center pt-16">
                      <Link to="/"><img src={museumof} alt="" className=""/></Link>
                </div>
                    <div className="pt-16 flex justify-center">
                    <img src={wow} alt="wow" className='absolute w-52 top-64'/>
                        <Link to="/contacts"className='font-nuts text-2xl'>{contact[language]}</Link>
                    </div>
                </div>
                <div className="h-full">  
                    <img src={mr1}
                    alt='mr1'
                    className='h-full pr-10'
                    />
                </div>
            </div>
        <div>
            <div className="px-60 py-10 flex flex-row justify-between">
                <div className="w-40">
                    <h2 className='font-nuts text-3xl'>{location[language]}</h2>
                    <ul className='grid grid-cols-1 pl-2 '>
                        <li className='font-chathura text-3xl'>{museumofart[language]}</li>
                        <li className='font-chathura text-3xl'>{larkin[language]}</li>
                        <li className='font-chathura text-3xl'>{sanfrancisco[language]}</li>
                    </ul>
                </div>
                <div className="w-40">
                    <h2 className='font-nuts text-3xl'>{exlopre[language]}</h2>
                    <ul className='grid grid-cols-1 pl-2 '>
                        <li className='font-chathura text-3xl'>{homepage[language]}</li>
                        <li className='font-chathura text-3xl'>Mark Rothko</li>
                        <li className='font-chathura text-3xl'>{exbition[language]}</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='font-nuts text-3xl flex justify-center'>{hours[language]}</h2>
                    <ul className='grid grid-cols-2 pl-3 text-3xl'>
                        <li className='font-chathura'>Mon:</li>
                        <li className='font-chathura'>12.00-20.00</li>
                        <li className='font-chathura'>Tue:</li>
                        <li className='font-chathura'>12.00-18.00</li>
                        <li className='font-chathura'>Wed-Sun:</li>
                        <li className='font-chathura'>{closed[language]}</li>
                    </ul>
                </div>
            </div>
            <div className="absolute right-40 bottom-10">
                    <h2 className='text-3xl absolute left-64 bottom-0 pb-3 font-nuts '>4.</h2>
                    <hr className=" bg-black h-0.5 w-72"></hr>
                </div>
                <div className='h-16'></div>
            <div className="w-1/2 flex justify-between px-16 text-xs pt-4">
                <h2><span>&copy;</span>2021 {museumofart[language]}</h2>
                <h2>{terms[language]}</h2>
                <h2>{privacy[language]}</h2>
            </div>
              
            </div>
            <img src={union} alt="" className='absolute -bottom-16 left-1/2'/>
            
        </div>
            
    )
}


export default Contacts;
