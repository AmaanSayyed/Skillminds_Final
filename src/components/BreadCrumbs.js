import { Link } from "react-router-dom";


const BreadCrumbs = ({title}) => {
    return (
        <div className="tw-relative tw-w-full tw-bg-cover tw-bg-center " style={{ backgroundImage: 'url(/assets/img/bg/bg_overlay_1.png)' }}>
        {/* <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50"></div> Optional: Dark overlay */}
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-48">
            <h1 className=" tw-text-white">{title}</h1>
          <nav className="tw-text-white tw-text-lg">
            <ul className=" tw-list-none tw-flex tw-p-0 tw-m-0 ">
              <li><Link to="/" className="tw-text-white hover:tw-text-blue-700">Home</Link></li>
              <li className="tw-mx-2">{'>>'}</li>
              <li>{title}</li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
export default BreadCrumbs;