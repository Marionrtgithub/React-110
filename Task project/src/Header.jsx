import Logo from'../assets/Logo.jpg';
function Header (){
    return(
        <header>
            <img className='Header' src={Logo} alt="" />
            <a className='Home' href="/">Home</a>
        </header>
    )
}
export default Header ;
