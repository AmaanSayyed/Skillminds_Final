import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Layout from "../Layouts/Layout";

const Error = () => {
    return (
        <Layout>
        <BreadCrumbs title="Error Page"/>
        <section class="space">
            <div class="container">
                <div class="error-img">
                    <img src="assets/img/error.svg" alt="404 image"/>
                </div>
                <div class="error-content">
                    <h2 class="error-title"><span class="text-theme">OooPs!</span> Page Not Found</h2>
                    <p class="error-text">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <Link to="/"  class="th-btn"><i class="fal fa-home me-2"></i>Back To Home</Link>
                </div>
            </div>
        </section>
        </Layout>
        
    );
}
 
export default Error;