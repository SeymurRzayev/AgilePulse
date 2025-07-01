import { useLocation } from 'react-router-dom'

const AdminAddLibraryOrArticle = () => {

    const location = useLocation()
    //   const navigate = useNavigate()
    const isLibraryMode: boolean = location.pathname.includes('library')
    return (
        <div>
            <h1>
                {isLibraryMode ? "Add book" : "Add article"}
            </h1>
        </div>
    )
}

export default AdminAddLibraryOrArticle
