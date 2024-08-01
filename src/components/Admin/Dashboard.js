import { useAuthContext } from "../../hooks/useAuthContext";


const Dashboard = () => {
    const {admin} = useAuthContext()

    return (
        <div className="tw-relative">
            <h1 className="tw-text-center tw-text-4xl tw-text-blue-500 tw-underline tw-my-10">Admin Dashboard</h1>
            <h2 className="tw-text-center tw-text-2xl">Welcome {admin.username}</h2>
        </div>
    );
}
 
export default Dashboard;