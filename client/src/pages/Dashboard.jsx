import { UserButton } from '@clerk/clerk-react'
import { useClerk } from "@clerk/clerk-react";
import { useContext } from "react";
import { UserContext } from '../../context/userContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    
    return (
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2> Welcome {user.name} !</h2>)}
        </div>
    )
}

export default Dashboard
