import BreadCrumbs from "../components/BreadCrumbs";
import Form from "../components/Contact/Form";
import Layout from "../Layouts/Layout";


export default function Contact(){
    return(
        <Layout>
            <BreadCrumbs title={"Contact"}/>
            <Form/>
        </Layout>
    )
}