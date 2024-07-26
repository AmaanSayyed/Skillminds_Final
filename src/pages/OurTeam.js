import BreadCrumbs from "../components/BreadCrumbs"
import Life from "../components/OurTeam/Life"
import Team from "../components/OurTeam/Team"
import Layout from "../Layouts/Layout"



export default function OurTeam(){
    return(
        <Layout>
            <BreadCrumbs title={"OurTeam"}/>
            <Team/>
            <Life/>
        </Layout>
    )
}