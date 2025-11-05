import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
                <div className="w-full flex justify-center py-4 bg-white text-blue-900">
                <div className="container flex justify-between items-center text-lg mx-8">
            
                <Link to='/home' 
                className='rounded-lg px-4 py-2 hover:bg-cyan-400 transform hover:scale-105 transition-transform duration-300 font-bold text-xl'>
                <img 
                 src='https://i.imgur.com/flxqOoP.png'
                    alt="Logo Quartzo Sollutions RH" 
                className="h-12 w-auto object-contain" 
                    />
            </Link>
                                <div className='flex gap-4'>
                            <Link to ='/home' className=' rounded-lg px-4 py-2 hover:bg-cyan-400 font-bold'>Home</Link>
                            <Link to ='/sobrenos' className=' rounded-lg px-4 py-2 hover:bg-cyan-400 font-bold'>Sobre Nós</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Navbar