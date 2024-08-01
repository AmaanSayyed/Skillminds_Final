import useMask from "../../hooks/useMask";

const Process = () => {
    useMask('#process-sec');
    const processes=[
        {no:"01",src:"./assets/img/icon/process_1_1.svg",title:"DESIGN",description:"Integrate and automate your Salesforce solution, making it a reality."},
        {no:"02",src:"./assets/img/icon/process_1_2.svg",title:"DEVELOPMENT",description:"Meet changing business requirements with our Salesforce Development services. "},
        {no:"03",src:"./assets/img/icon/process_1_3.svg",title:"DEPLOYMENT",description:"Integrate Salesforce solutions seamlessly, using best practices from DevOps processes and tools"},
        {no:"04",src:"./assets/img/icon/process_1_4.svg",title:"SUPPORT",description:"Continuously support Salesforce solutions with administration, maintenance for ongoing value."},

    ];
    return ( 
       
// Process Area  

    <section className="process-area4 th-radius3 space" id="process-sec" data-bg-src="/assets/img/bg/appointment_bg_3.jpg">
        <div className="container th-container4">
            <div className="title-area text-center">
                <span className="sub-title text-white">
                    <div className="icon-masking me-2">
                        <img src="./assets/img/theme-img/title_shape_4.1.svg" alt="shape"/>
                    </div>
                    WORKING PROCESS
                </span>
                <h2 className="sec-title text-white">Know Our Working Process</h2>
            </div>
            <div className="process-card-area">
                <div className="row gy-40" >
                    {processes.map((process,index)=>(
                        <div className="col-md-6 col-lg-3 process-card2-wrap" key={index}>
                            <div className="process-card2">
                                <div className="process-card2_number">{process.no}</div>
                                <div className="process-card2_icon">
                                    <img src={process.src} alt="icon"/>
                                </div>
                                <h2 className="box-title">{process.title}</h2>
                                <p className="process-card2_text">{process.description}</p>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Process;