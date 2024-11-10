import Logo from '../assets/img/logo-white.svg';
import { social } from '../Data';
export default function Footer() {
  return (
    <footer className="py-8 bg-orange lg:py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between text-white gap-y-6 lg:flex-row">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-8 lg:h-12" />
          </a>
          <div className="text-sm">
            &copy; Copyright 2028. All rights reserved.
          </div>
          <div className="flex gap-4">
            {social.map((item, index) => (
              <a href={item.href} key={index} className="text-white">
                <div className="bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full flex justify-center items-center transition-colors text-2xl">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
