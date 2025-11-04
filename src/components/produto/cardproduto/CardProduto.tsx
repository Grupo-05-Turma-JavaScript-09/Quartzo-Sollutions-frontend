
function CardProduto(){
    return (
        <div className='border-black border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-cyan-400 text-white py-2 px-4 items-center gap-4">
                    <h3 className='text-xl font-bold'>Produto</h3>
                </div>
                <div className='p-4 '>
                    <div className= 'p-8 text-black bg-gray-100 h-full'>
                    <h4 className='text-lg font-semibold uppercase'>Produto Titulo</h4>
                    <p>Produto Texto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduto