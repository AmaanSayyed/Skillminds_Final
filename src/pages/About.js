import BreadCrumbs from "../components/BreadCrumbs";
import Feature from "../components/About/Feature";
import Intro from "../components/About/Intro";
import MissionVision from "../components/About/MissionVision";
import Layout from "../Layouts/Layout";

export default function About(){
    return(
            <Layout>
                <BreadCrumbs title={"About"}/>
                <Intro/>
                <MissionVision/>
                <Feature/>
            </Layout>
    )
}