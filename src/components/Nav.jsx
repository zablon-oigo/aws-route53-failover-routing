import { navigation } from '../Data';

export default function Nav() {
  return (
    <nav>
      <ul>
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
