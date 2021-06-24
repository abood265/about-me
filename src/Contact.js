import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className='side'>
        <a target="_blank" href='https://www.facebook.com/abdsalah234' style={{backgroundColor:'#7498cf',display:'flex'}}>Facebook <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png'} style={{width:'35px',paddingLeft:'10px'}}/> </a>
        <a target="_blank" href='https://www.instagram.com/abdsalah526/' style={{backgroundColor:'rgb(116, 35, 102)'}}>Instagram <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'} style={{width:'33px'}}/></a>
        <a target="_blank" href='https://twitter.com/AbdSalah234' style={{backgroundColor:'blue'}}>Twitter <img src={'https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png'} style={{width:'35px',paddingLeft:'20px'}}/></a>
        {/* <a href='#' style={{backgroundColor:'yellow'}}>Contact</a> */}
        
    </div>
    )
}

export default Contact  
