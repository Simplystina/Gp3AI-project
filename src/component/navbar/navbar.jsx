import React, {useState, useEffect} from 'react'
import  { Rimenu3Line, RiCloseLin, AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import './navbar.css'
const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(false)
  const checkSize = ()=>{
        return setScreenSize(window.innerWidth)
  }
  useEffect(()=>{
       window.addEventListener('resize', checkSize)
       return ()=>{
           window.removeEventListener('resize', checkSize)
       }
  })

  useEffect(()=>{
      if (screenSize <=1075) { 
          setTogglemenu(true)
      }else{
          setTogglemenu(false)
          //console.log(activeMenu)
      }
  },[screenSize])

  
  if (togglemenu) {
     return (
       <>
       <div className='gpt3-navbar'>
          <div className='gpt3-navbar-logo-container'>
            <img className='gpt3-navbar-logo' src={logo} alt='logo'></img>
          </div>
          <div className='gpt3-navbar-sign-buttons-container'>
              <div className='gpt3-navbar-sign-buttons'>
                <p className='navbar-sign-in'>Sign in</p>
                <button>Sign up</button>
              </div>
              {showMenu? <AiOutlineClose className='gpt3-icon-closed' onClick={()=>setShowMenu(!showMenu)}/> : <AiOutlineMenuUnfold className='gpt3-icon-opened' onClick={()=>setShowMenu(!showMenu)}/>}
           </div>
        </div>
           {showMenu &&<div className='gpt3-navbar-list-container-toggle scale-up-center'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#whatgp3'>What is GPT</a></p>
              <p><a href='#openai'>OpenAI</a></p>
              <p><a href='casestudy'>Case Studies</a></p>
              <p><a href='lib'>Library</a></p>
              <div className='gpt3-navbar-sign-buttons-nav change-display'>
                <p><a>Sign in</a></p>
                <button>Sign up</button>
              </div>
          </div>}
          
      
       
     </>
     )
  }
  return (
    <div className='gpt3-navbar'>
       <div className='gpt3-navbar-logo-container'>
         <img className='gpt3-navbar-logo' src={logo} alt='logo'></img>
       </div>
       <div className='gpt3-navbar-list-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatgp3'>What is GPT</a></p>
          <p><a href='#openai'>OpenAI</a></p>
          <p><a href='#casestudy'>Case Studies</a></p>
          <p><a href='#lib'>Library</a></p>
       </div>
       <div className='gpt3-navbar-sign-buttons'>
          <p><a href='signin'>Sign in</a></p>
          <button>Sign up</button>
       </div>
      
    </div>
  )
}

export default Navbar
