import Logo from 'components/Logo'
import {
  IoHomeOutline,
  IoMusicalNotesOutline,
  IoLibraryOutline
} from 'react-icons/io5'
import { TbCategory } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

interface SideBarItem {
  path: string
  label: string
  icon: JSX.Element
}

const sidebarItems: SideBarItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: <IoHomeOutline size={24} color="white" />
  },
  {
    path: '/categories',
    label: 'Category',
    icon: <TbCategory size={24} color="white" />
  },
  {
    path: '/songs',
    label: 'Songs',
    icon: <IoMusicalNotesOutline size={24} color="white" />
  },
  {
    path: '/library',
    label: 'Library',
    icon: <IoLibraryOutline size={24} color="white" />
  }
]
interface SideBarItemProps {
  item: SideBarItem
}
const SidebarItem = ({ item }: SideBarItemProps): JSX.Element => {
  const location = useLocation()
  const currentPath = location.pathname
  const isActive = currentPath === item.path
  return (
    <li className="text-lg">
      <Link className="py-3" to={item.path}>
        {item.icon}
        <p className={`${isActive ? 'text-white' : 'text-gray-400'}`}>
          {item.label}
        </p>
      </Link>
    </li>
  )
}

const AppSideBar = () => {
  return (
    <div className="drawer-side z-[50]">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu min-h-full w-80 bg-sidebar p-4 text-white">
        {/* Sidebar content here */}
        <Logo />
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default AppSideBar
