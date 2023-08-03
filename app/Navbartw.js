

function Navbartw() {

  return (
    <div className="fixed top-0 h-fit inset-x-0
        bg-zinc-100 border-b border-zinc-300 p-2 z-[10]">
        <div className="w-1/3 h-full mx-auto items-center 
            justify-between gap-2 flex">
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#About">About</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Education">Education</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Experience">Experience</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Projects">Projects</a>
        </div>
    </div>
  );
}

export default Navbartw;