import Link from "next/link";
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 items-center" >
            <Link href={'/'} className="hover:underline" >Gmail</Link>
            <Link href={'/'} className="hover:underline" >Images</Link>

            <TbGridDots/>

            <button>Sign in</button>
        </div>
    </header>
  )
}
