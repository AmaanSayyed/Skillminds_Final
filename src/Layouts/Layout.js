import PropTypes from 'prop-types'
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollTo from '../utils/ScrollTo';
import ScrollTop from '../utils/ScrollTop';
import ScrollToTop from '../utils/ScrollToTop';
import SmoothScroll from '../utils/SmoothScroll';

//prop validation for children
Layout.propTypes={
    children:PropTypes.node.isRequired,
}

//default prop for children
Layout.defaultProps = {
    children:<h1>Empty!</h1> | null,
}

export default function Layout({children}){

    return(
        <div>
            <Header/>
            <ScrollToTop/>
            <ScrollTo/>
            <ScrollTop/>
            <SmoothScroll/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}