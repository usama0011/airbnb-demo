import Image from 'next/image';
import { BeakerIcon, GlobeAltIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline'
import {UserCircleIcon} from '@heroicons/react/solid'
function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white grid grid-cols-3  shadow-md p-4 md:px-10 items-center">
          <div className="relative h-14  flex items-center cursor-pointer my-auto">
                <Image src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW" layout="fill"  objectFit="contain" objectPosition="left" />
          </div>
          <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
                  <input type="text" placeholder="Search" className="flex flex-grow bg-transparent outline-none pl-4" />
              <SearchIcon className="hidden md:inline-flex bg-red-400 p-2 h-8 rounded-full cursor-pointer md:mx-2 text-white items-center"/>
          </div>
          <div className="flex items-center space-x-4 justify-end text-gray-600 ">
          <p className="hidden md:inline cursor-pointer hover:border-b-2 ">Become a host</p>
                  <GlobeAltIcon className="h-6 cursor-pointer"/>
              
             <div className="space-x-2 flex items-center border-2 rounded-full p-2">
               <MenuIcon className="h-6 cursor-pointer"/>
                <UserCircleIcon className="h-6 cursor-pointer"/>
             </div>
          </div>
        </header>
    )
}

export default Header
