import './estilo.css'

import IconesHeader from '../IconesHeader';
import Logo from '../logo';
import OpcoesHeader from '../OpcoesHeader';

function Header(){
    return(
        <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/> 
        
      </header>
    )
}

export default Header