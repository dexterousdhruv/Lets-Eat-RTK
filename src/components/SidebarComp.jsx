import React from 'react'
import Sidebar from './Sidebar'
import { SidebarItem } from './Sidebar'
import { LayoutPanelLeft, ConciergeBell, CalendarDays, NotepadText, Mail, Users} from 'lucide-react'
import { NavLink } from 'react-router-dom'


const SidebarComp = ({ expanded, setExpanded }) => {
  
  const size = 20
  return (
    <div className="">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        <NavLink to='/' >
          {({ isActive }) => (
            <SidebarItem icon={<LayoutPanelLeft size={size} />} text='Overview' alert active={isActive} />
          )}
        </NavLink>

        <NavLink to='/1' >
          {({ isActive }) => (
            <SidebarItem icon={<ConciergeBell size={size}  />} text='Food Order' active={isActive} />
          )}
        </NavLink>

        <NavLink to='/favorites' >
          {({ isActive }) => (
            <SidebarItem icon={<NotepadText size={size} />} text='Favorite' active={isActive} />
          )}
        </NavLink>

        <NavLink to='/2' >
          {({ isActive }) => (
            <SidebarItem icon={<Mail size={size} />} text='Messages' active={isActive} />
          )}
        </NavLink>

        <NavLink to='/3' >
          {({ isActive }) => (
            <SidebarItem icon={<CalendarDays size={size} />} text='Order History' active={isActive} />
          )}
        </NavLink>

        <NavLink to='/4' >
          {({ isActive }) => (
            <SidebarItem icon={<Users size={size} />} text='Others' active={isActive}  />
          )}
        </NavLink>
        
      </Sidebar>
    </div>
  )
}

export default SidebarComp