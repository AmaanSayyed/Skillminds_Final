import BreadCrumbs from "../components/BreadCrumbs";
import ContactForm from "../components/Contact/ContactForm";
import ContactHead from "../components/Contact/ContactHead";
import Layout from "../Layouts/Layout";


export default function Contact(){
    return(
        <Layout>
            <BreadCrumbs title={"Contact"}/>
            <ContactHead/>
            <ContactForm/>
        </Layout>
    )
}