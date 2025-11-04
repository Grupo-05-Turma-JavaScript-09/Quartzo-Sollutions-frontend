import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-blue-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                                        <Link 
                        to='/home' 
                        className='rounded-lg px-4 py-2 hover:bg-cyan-400 transform hover:scale-110 transition-transform duration-300 font-semibold text-xl'
                    >
                        Quartzo Sollutions RH
                    </Link>

                    <div className='flex gap-4'>
                         <Link to ='/sobrenos' className=' rounded-lg px-4 py-2 hover:bg-cyan-400'>Sobre Nós</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar