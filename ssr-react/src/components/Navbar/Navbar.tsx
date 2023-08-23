import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_transparent.svg'

interface SidebarDataType {
  title: string
  path: string
  icon: React.ReactNode
  cName: string
}
const Logo = () => {
  const [showLogo, setShowLogo] = useState(false)
  useEffect(() => {
    setShowLogo(true)
  }, [showLogo])
  if (showLogo) {
    return <img src={logo} className="App-logo" alt="logo" />
  }
  return <></>
}
const SidebarData: SidebarDataType[] = [
  {
    title: 'Acasa',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Portofoliu',
    path: '/portofoliu',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Servicii',
    path: '/servicii',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-button',
  },
]
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const showSidebar = () =>
    setIsSidebarOpen((isSidebarOpen) => {
      return !isSidebarOpen
    })
  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      if (isSidebarOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    }
  }, [isSidebarOpen])
  return (
    <>
      <IconContext.Provider value={{ color: 'undefined' }}>
        <nav className="navigation">
          <button
            className="menu-bars"
            onClick={showSidebar}
            type="button"
            title={isSidebarOpen ? 'Close' : 'Open'}
          >
            {isSidebarOpen ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
          </button>
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="menu-items">
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </nav>

        <div
          className={isSidebarOpen ? 'side-nav-menu active' : 'side-nav-menu'}
        >
          <div className="side-nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <Link to={item.path} onClick={showSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
