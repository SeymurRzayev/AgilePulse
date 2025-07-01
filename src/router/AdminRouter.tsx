import { Route } from "react-router-dom"
import AdminPanel from "../layout/Admin/AdminPanel"
import Dashboard from "../pages/Admin/MenuItemsContent/Dashboard"
import Users from "../pages/Admin/MenuItemsContent/Users"
import Projects from "../pages/Admin/MenuItemsContent/Projects"
import Tasks from "../pages/Admin/MenuItemsContent/Tasks"
import NotificationCenter from "../pages/Admin/MenuItemsContent/NotificationCenter"
import Groups from "../pages/Admin/MenuItemsContent/Groups"

/* Hele istifade etmeyin */

const AdminRouter = () => {
    return (
        <Route path="/admin/*" element={<AdminPanel />} >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="groups" element={<Groups />} />
            <Route path="notificationSystem" element={<NotificationCenter />} />
        </Route>
    )
}

export default AdminRouter