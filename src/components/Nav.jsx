import { navigation } from '../Data';

export default function Nav() {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className="">{item.name}</a> 
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
