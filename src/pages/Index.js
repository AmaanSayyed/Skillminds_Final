import React from "react";
import Layout from "../Layouts/Layout";
import Content from '../components/Home/Content'
import CliendSlider from '../components/Home/ClientSlider'
import Service from '../components/Home/Service'
import About from '../components/Home/About'
import Process from '../components/Home/Process'

export default function Home(){
    return(
        <Layout>
            <Content/>
            <CliendSlider/>
            <Service/>
            <About/>
            <Process/>
           
         </Layout> 
    )
}