import Bundles from "./Bundles"; 
import { bundleData } from '../Data';

export default function Prices() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-3 font-semibold text-orange">Our prices</h2>
          <h2 className="mb-3 h2">How Big is your Dog?</h2>
          <p className="text-lg text-blue">Choose dog category</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]">
          {bundleData.map((item, index) => {
            const { name, image, dogCategory } = item;
            
            return (
              <div key={name} className="">
                <div className="mb-2 transition-all duration-300 lg:mb-8 hover:scale-105">
                  <img src={image.type} alt={`Image for ${name}`} className="w-full" />
                </div>
                <h3 className="font-semibold capitalize lg:text-2xl text-blue">{name}</h3>
                <div className="">{dogCategory}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
