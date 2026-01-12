import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext, NavbarColorContext } from './NavContexts'
import PropTypes from 'prop-types'

const NavContext = ({ children } = {}) => {

    const [navColor, setNavColor] = useState('white')
    
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function(){
        if(locate == '/projects' || locate == '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])
    

    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                <NavbarColorContext.Provider value={[navColor,setNavColor]}>
                    {children}
                </NavbarColorContext.Provider>
            </NavbarContext.Provider>
        </div>
    )
}

NavContext.propTypes = {
    children: PropTypes.node
}

export default NavContext