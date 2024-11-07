import PhoneIcon from '../assets/img/phone.svg';
export default function Program() {
  return (
    <div className="flex items-baseline justify-end lg:gap-x-10">
                <img src={PhoneIcon} alt="" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" />
                <div className="lg:test-[23px] text-blue font-extrabold ">+ 123 456 789 </div>
                <div className="">
                  <p className="hidden lg:flex">
                    Opening Hours: Mon - Sun: 10am - 6pm
                  </p>
                  <p className="text-right lg:hidden">
                    Mon - Sun: 10am - 6pm
                  </p>
                </div>
    </div>
  )
}
