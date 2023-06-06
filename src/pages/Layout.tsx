import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  //valorDesejado: "30000", prazo: 36}

  return (
    
    <div className="bg-[#015CB0] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
    
  )
}

export default Layout