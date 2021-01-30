import React, { useState } from 'react'
import logo from '../assets/netflixlogo.png'
import '../styles/navbar.css'
import lighttheme from '../assets/light.png'
import darktheme from '../assets/dark.png'
import avatar from '../assets/hatem.jpg'
import { light , dark } from '../redux/themeSlice'
import { useDispatch } from 'react-redux'


function Navbar() {
    const [themeicon, setThemeicon] = useState(darktheme)
    const dispatch = useDispatch()
    
    
    const onthemechanged =()=> {
        if(themeicon===darktheme){
            dispatch(dark('dark-theme'))
            setThemeicon(lighttheme)
        }
        else{
            dispatch(light('light-theme'))
            setThemeicon(darktheme)
        }
        
    }
    
    return (
        <div className="navbar" >
                <img src={logo} alt="netflix logo" className="netflix-logo"/>
                <div className="navbar-end-section">
                    <div className="theme-togler">
                        <img src={themeicon} alt="" onClick={onthemechanged }/>
                    </div>
                    <img src={avatar} alt="" className="avatar"/>
                </div>
                
        </div>
         
    )
}

export default Navbar
