import Bundles from "./Bundles"; 
import { bundleData } from '../Data';
import { useEffect, useState } from "react";

export default function Prices() {
  const [index,setIndex]=useState(0)
  const[bundles,setBundles]=useState([])
  useEffect(()=>{
    setBundles(bundleData[0].services)
  }, [])
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-3 font-semibold text-orange">Our prices</h2>
          <h2 className="mb-3 h2">How Big is your Dog?</h2>
          <p className="text-lg text-blue">Choose dog category</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]">
          {bundleData.map((item, idx) => {
            const { name, image, dogCategory } = item;
            
            return (
              <div key={idx} onClick={()=>setIndex(idx)} className="text-center cursor-pointer">
                <div className="mb-2 transition-all duration-300 lg:mb-8 hover:scale-105">
                  <img src={image.type} alt={`Image for ${name}`} className="w-full" />
                </div>
                <h3 className="font-semibold capitalize lg:text-2xl text-blue">{name}</h3>
                <div className={`${index === idx ? 'border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[130px] after:lg:absolute after:lg:-bottom-6 relative ':'border-b-4 border-transparent'} pb-4 mb-12 `}>
                  <div className="hidden capitalize lg:block">
                  {dogCategory}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Bundles  bundles={bundles}/>
      </div>
    </section>
  );
}
