import Image from 'next/image';
import image from '../Images/image.png'
import { BeakerIcon, GlobeAltIcon, LoginIcon, MenuIcon, QuestionMarkCircleIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import {UserCircleIcon} from '@heroicons/react/solid'
function Header() {
    return ( 
        <header className="sticky w-full h-18 top-0 z-50 bg-gray-700 grid grid-cols-2 mr-2   shadow-md p-4 md:px-10 items-center">
          <div className="relative sm:mr-3 h-20 flex items-center cursor-pointer my-auto">
                <Image src={image} layout="fill"  objectFit="contain" objectPosition="left" />
          </div>
           <div>

          
          <div className="flex sm:ml-2 sm:text-sm items-center space-x-3 justify-end sm:px-2 text-gray-300 ">
        
                 <div className="flex   space-x-1  hidden md:inline-flex items-center">
                  <SearchIcon className="h-5  cursor-pointer"/>
                  <a href="/">Find</a>

                 </div>
                 <div  className="flex   space-x-1 hidden md:inline-flex items-center">
                  <UserIcon className="h-5 cursor-pointer"/>
                   Tech
                 </div>
                 <div  className="flex   space-x-1  items-center">
                  <QuestionMarkCircleIcon className="h-5 cursor-pointer"/>
                   <p>Help</p>
                 </div>
                 <div  className="flex  space-x-1  items-center">
                  <LoginIcon className="h-5 cursor-pointer"/>
                  <p>Login</p>
                 </div>
              
            
             <p className=" text-white rounded-xl px-2 py-2 bg-green-500 text-sm hidden md:inline  cursor-pointer ">Join For Free</p>
          </div>
           </div>
        </header>
    )
}

export default Header
