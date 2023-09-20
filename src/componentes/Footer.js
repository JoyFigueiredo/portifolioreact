import React from 'react';
import gifImage from '../imagens/cuei.gif';

function Footer() {
    return (
        <div>
            <footer>
                <img width={101}
                  height={110} 
                  src={gifImage} 
                  alt="GIF" />
                <p className="copyright">&copy; Copyright- Joice - 2023</p>
            </footer>
        </div>
    );
}

export default Footer;