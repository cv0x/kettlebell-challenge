import { UserButton } from '@clerk/clerk-react'
import { useClerk } from "@clerk/clerk-react";
import React from 'react'

const Dashboard = () => {
    const { user } = useClerk();
    
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome {user.fullName}</h2>
            <UserButton />
        </div>
    )
}

export default Dashboard
