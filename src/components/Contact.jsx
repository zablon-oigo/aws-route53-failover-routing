import DogImg from "../assets/img/dogs/dog-contact.png"
export default function Contact() {
  return (
    <div className="container mx-auto ">
        <div className="flex flex-col justify-around lg:flex-row">
            <div className="order-1 lg:-order-1 lg:mt-16">
                <img src={DogImg} alt="" className="-mb-[12px]" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="mb-3 font-semibold text-orange">
                    Contact 
                </h2>
                <p className="text-4xl font-extrabold text-blue">
                    + 123 456 789
                </p>
                <p className="mb-7 text-blue">
                    Opening Hours: Mon - Sun: 10am - 6pm
                    
                </p>
                <button className="btn">
                        Get an Appontment
                    </button>
            </div>
        </div>
    </div>
  )
}
