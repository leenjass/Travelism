import { NavItems } from "components"
import { Outlet } from "react-router"

const Adminlayout = () => {
  return (
    <div className="admin-layout flex h-screen ">
        <aside className="w-full max-w-[270px] hidden lg:block shadow-md">
            <div>
                <NavItems />
            </div>
        </aside>
        <aside className="children"><Outlet/></aside>
    </div>
  )
}

export default Adminlayout