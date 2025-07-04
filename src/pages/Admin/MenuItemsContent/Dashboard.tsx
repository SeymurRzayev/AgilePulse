import { useNavigate } from 'react-router-dom';
import dasboardIconAdmin from '../../../assets/icons/ci_main-component.svg'


const PAGES = [
    {
        label: 'Ana səhifə',
        icon: dasboardIconAdmin,
        path: 'main-page'
    },
    {
        label: 'Təlimlər',
        icon: dasboardIconAdmin,
        path: ''
    },
    {
        label: 'İmtahanlar',
        icon: dasboardIconAdmin,
        path: ''
    },
    {
        label: 'Haqqımızda',
        icon: dasboardIconAdmin,
        path: ''
    },
    {
        label: 'Akademiya',
        icon: dasboardIconAdmin,
        path: ''
    },
    {
        label: 'Header&Footer',
        icon: dasboardIconAdmin,
        path: ''
    }
]

const Dashboard = () => {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-full '>
            <div className='w-[630px] mt-[43px]'>
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal'>Tapşırıqlar</h2>
                <div className="grid grid-cols-3 gap-6 mt-[30px]">
                    {/* Cards */}
                    {PAGES.map((page, index) => (
                        <div key={index}
                            onClick={() => navigate(`${page.path}`)}
                            style={{ boxShadow: '4px 4px 3px 3px #5756561F' }}
                            className='w-[194px] h-[148px] bg-[#EAEDF5] p-8 rounded-4xl cursor-pointer'
                        >
                            <div className="flex flex-col gap-2.5">
                                <img src={page.icon} alt="" className='w-10 h-10 ' />
                                <span className="text-[#000000DE] text-2xl font-bold font-[Corbel]">{page.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
