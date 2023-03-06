import rothko from './art/rothko.jpg';
import markfont from './art/markfont.png';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import wow from './art/wow.png';
import union from './desigh/union.png'
import qvadrat from './desigh/qvadratpath2.png'


const Home = ({language}) => { 

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Libre Bodoni','Grape Nuts']
      }
    });
   }, []);

  const learn = {'EN': "LEARN MORE", 'LV':"Uzzināt vairāk",'JP':"もっと詳しく知る"}
  const share = {'EN': "SHARE", 'LV':"Dalīties",'JP':"共有"}


    return(
      <div className='bg-amber-100 h-screen flex flex-row '>
        <img src={rothko}
             alt="modernart"
             className="h-full"/>
        <div>
          <div>
              <img src={union} alt="union" className='absolute right-1/2 top-24'/>
              <img src={qvadrat} alt="union" className='absolute right-0 top-16'/>
              <img src={markfont}
              alt='font'
              className='pl-52 pt-32'/>
              <h2 className='text-2xl flex justify-end font-loader'>01.12.22-20.01.23</h2>
          </div>
          <div className='pt-24 grid grid-cols-2'>
              <div className='grid justify-items-center w-72'>
                        <h2 className='text-3xl font-nuts'>{learn[language]}</h2>
              </div>
              <div className='pl-24'>
                          <h2 className='flex justify-items-center pl-60 font-loader'>{share[language]}</h2>
                          <div className='flex flex-row pt-8 justify-between w-72 font-nuts'>
                              <h2>Instagram</h2>
                              <h2>Facebook</h2>
                              <h2>Twitter</h2>
                          </div>
                          <div className="absolute right-40 bottom-10">
                            <h2 className='text-2xl absolute left-64 bottom-0 pb-3 font-nuts'>1.</h2>
                            <hr className=" bg-black h-0.5 w-72"></hr>
                          </div>
                          <img src={wow} alt="wow" className='absolute left-1/3 bottom-20 w-96'/>
                          
              </div>
          </div>
        </div>
        
        
      
     </div>
    )
}


export default Home;