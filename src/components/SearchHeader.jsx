import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
// import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from "react-icons/tb";


export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center justify-between" >
            <Link href={'/'}>
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
            alt="Google logo"
            width={120}
            height={40}
            priority
            style={{width:"auto"}}
        />
            </Link>

            <div className=" flex-1">
                <SearchBox/>
            </div>

            <div className="">
                {/* <RiSettings3Line/> */}
                <TbGridDots/>
            </div>
            <button>Sign in</button>
        </div>
    </header>
  )
}
