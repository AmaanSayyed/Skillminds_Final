import HeaderTop from "./Header/HeaderTop";
import MobileMenu from "./Header/MobileMenu";
import Navbar from "./Header/Navbar";


const Header = () => {
    return (
        <header className="th-header header-layout15 onepage-nav">
            <MobileMenu/>
            <HeaderTop/>
            <Navbar/>
        </header>
    );
}
 
export default Header;