import Logo from 'components/Logo'
import {
  IoHomeOutline,
  IoMusicalNotesOutline,
  IoLibraryOutline
} from 'react-icons/io5'
import { TbCategory } from 'react-icons/tb'
import { Link } from 'react-router-dom'

interface SideBarItem {
  path: string
  label: string
  icon: JSX.Element
}

const sidebarItems: SideBarItem[] = [
  {
    path: '/',
    label: 'Trang chủ',
    icon: <IoHomeOutline size={24} color="red" />
  },
  {
    path: '/categories',
    label: 'Thể loại',
    icon: <TbCategory size={24} color="red" />
  },
  {
    path: '/songs',
    label: 'Bài hát',
    icon: <IoMusicalNotesOutline size={24} color="red" />
  },
  {
    path: '/library',
    label: 'Thư viện',
    icon: <IoLibraryOutline size={24} color="red" />
  }
]
interface SideBarItemProps {
  item: SideBarItem
}
const SidebarItem = ({ item }: SideBarItemProps): JSX.Element => {
  return (
    <li className="text-lg">
      <Link className="py-3" to={item.path}>
        {item.icon}
        {item.label}
      </Link>
    </li>
  )
}

const AppSideBar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu min-h-full w-80 bg-transparent p-4 text-base-content">
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
