import './header.css';
import {Link} from  'react-router-dom'

function Header(){
    return(
         <header>
            <a href="/" className="logo">Home Marcos</a>
            <a href="/Usuario" className="logo">Home Marcos</a>
         </header>
    )
}

export default Header;