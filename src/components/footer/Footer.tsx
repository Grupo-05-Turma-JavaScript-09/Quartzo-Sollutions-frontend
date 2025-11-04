import {  GithubLogoIcon } from "@phosphor-icons/react"


function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Quartzo Sollutions RH | Desenvolvido pelo Grupo 5 © {data}
                        </p>
                    <p className='text-lg'>Contato: grupo05.turmajavascript.09@gmail.com
</p>
                        <a href = "https://github.com/Grupo-05-Turma-JavaScript-09/" target="_blank"
                        className="hover:text-cyan-400 transition-colors duration-300">
                        <GithubLogoIcon size={40} weight='bold' />
                        </a>
                </div>
            </div>
        </>
    )
}

export default Footer