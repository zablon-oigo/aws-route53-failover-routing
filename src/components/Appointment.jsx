import DogImg from '../assets/img/dogs/dog-appointment.png'
export default function Appointment() {
  return (
    <div className="bg-yellow-secodary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]">
           <div className="container mx-auto">
            <div className="hidden w-full max-w-[790px] mx-auto lg:flex justify-center">
              <img src={DogImg} alt="" className=''/>
            </div>
            <form action="" className="bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px]">
              <h2 className="">
                Get an appointment
              </h2>
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
            </form>
           </div>
    </div>
  )
}
