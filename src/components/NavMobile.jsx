import { navigation } from "../Data";


export default function NavMobile() {
  return (
    <nav className="h-full">
      <ul className="flex flex-col items-center justify-center h-full space-y-5">
        {navigation.map((item,index)=>{
          return(
            <li className="font-medium capitalize text-blue" key={index}>
              <a href={item.href} className="">
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
