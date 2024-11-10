import { BsCheckCircleFill } from "react-icons/bs";
export default function Bundles({bundles}) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-[30px] ">
        {bundles.map((bundle,index)=>{
            const {name,price,list}=bundle;
            return(
                <div className="w-full bg-white lg:max-w-1/3 shadow-primary text-center h-[560px] rounded-[60px] py-12 px-8" key={index}>
                    <p className="mb-4 text-5xl font-bold text-blue">
                        {price}
                    </p>
                    <div className="">
                        <p className="mb-12 font-medium capitalize text-blue ">
                            {name}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4 max-w-[230px] mx-auto  ">
                        {list.map((item,index)=>{
                            return(
                                <div className="" key={index}>
                                    <BsCheckCircleFill className="text-orange"/>
                                    <div className="">
                                        {item}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })}

    </div>
  )
}
