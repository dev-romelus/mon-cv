import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div style={{padding:'1.6rem', margin:'auto 0'}}>
                <div style={{justifyContent: 'center', display:'flex', marginBottom:'10px'}} className="link_footer">
                    <a href="https://github.com/dev-romelus?tab=repositories" rel='noreferrer'>GITHUB</a>
                    <a href="https://www.linkedin.com/in/jean-marie-romelus-727957122/" rel='noreferrer'>LINKEDIN</a>
                    <a href="https://twitter.com/Romelus97" rel='noreferrer'>TWITTER</a>
                </div>
                <div style={{justifyContent: 'center',textAlign:'center'}}>
                    <span style={{color:'#feca57'}} className="developer">Développé par Romelus Jean-Marie © 2020</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer;