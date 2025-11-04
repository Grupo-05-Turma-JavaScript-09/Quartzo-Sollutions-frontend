import {  GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Quartzo Sollutions RH | Desenvolvido pelo Grupo 5 © {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon size={48} weight='bold' />
                        <GithubLogoIcon size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer