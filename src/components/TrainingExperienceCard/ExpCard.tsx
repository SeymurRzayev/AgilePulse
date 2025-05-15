import img from '../../assets/images/943898faecd477f7d486f17373ff66441ae92315.jpg'
import x from '../../assets/icons/double-quotes.png'

const ExpCard = () => {
    return (
        <div className="relative h=[240px] flex w-[484px] mx-auto">
            <img
                src={img}
                className='mr-[-50px] z-20 mt-8 rounded-bl-lg rounded-tr-lg rounded-br-[50px] w-[120px] h-[120px] rounded-tl-[50px] bg-red-500 object-cover'
            />
            <div className=" relative flex flex-col gap-4 bg-[#FFFFFF] border rounded-bl-lg rounded-tr-lg rounded-br-[100px] rounded-tl-[100px] px-5 py-10">
                <div className='absolute top-0 w-full right-0 flex justify-end '><img className='w-[42px] h-[32px' src={x} alt="" /></div>
                <div className='mx-auto w-3/4'>
                    <h3 className='text-2xl font-bold'>Elvin Quliyev</h3>
                    <p className='text-sm'>Platforma çox peşəkar formada hazırlanıb. Təlimin sonunda  Agile metodologiyasını rahatlıqla tətbiq edə bilirəm.</p>
                    <span className='text-sm'>Day</span>
                </div>
            </div>
        </div>
    )
}

export default ExpCard