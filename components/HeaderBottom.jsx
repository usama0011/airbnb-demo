import Image from 'next/image';
import image from '../Images/image.png'
import { ArrowDownIcon, BeakerIcon, BellIcon, ChevronDownIcon, ClipboardListIcon, CogIcon, GlobeAltIcon, LoginIcon, MenuIcon, QuestionMarkCircleIcon, SearchIcon, UserIcon, ViewBoardsIcon } from '@heroicons/react/outline'
import {UserCircleIcon} from '@heroicons/react/solid'
function HeaderBottom() {
    return (
        <div className="">
              <header className=" fixed h-22 text-white w-full top-24 z-50 bg-yellow-500 mr-2 flex  justify-between shadow-md p-4 md:px-10 items-center">
         
           <div>

          
          <div className="flex hidden md:inline-flex sm:ml-2 sm:text-sm items-center space-x-3 justify-end sm:px-2 text-white ">
        
                 <div className="flex   items-center">
                  <ClipboardListIcon className="h-5  cursor-pointer"/>
                  <a href="/">Dashboard</a>

                 </div>
                 <div  className="flex items-center">
                  <ChevronDownIcon className="h-5 cursor-pointer"/>
                   Buying
                 </div>
                 <div  className="flex items-center">
                  <ChevronDownIcon className="h-5 cursor-pointer"/>
                   <p>Contact</p>
                 </div>
                 <div  className="flex items-center">
                  <BellIcon className="h-5 cursor-pointer"/>
                  <p>Inbox</p>
                 </div>
                 <div  className="flex items-center">
                  <CogIcon className="h-5 cursor-pointer"/>
                  <p>Setting</p>
                 </div>
              
            
             <p className=" text-white rounded-xl px-2 py-2  text-sm hidden md:inline  cursor-pointer ">$44,30</p>
          </div>
           </div>
            <div className="space-x-4 sm:space-x-4 sm:items-center">
                <a href="/">Messages</a>
                <a href="/">Lists</a>
                <a href="/">Orders</a>
                <a href="/">Income</a>
                <a className="px-2 py-1 rounded-xl border-2 text-green-700" href="/">$4,500</a>
            </div>
        </header>
        </div>
    )
}

export default HeaderBottom
