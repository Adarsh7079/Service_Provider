import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";

const Logout = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const res = await fetch(`http://localhost:4000/service/v1/admin/logout`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                credentials: "include",
            });

            console.log("Response from logout ", res);

            if (res.status === 202) {
                dispatch({ type: "USER", payload: false });
                navigate('/login');
            } else if (res.status === 404) {
                window.alert("Error occurred");
            }
        } catch (err) {
            console.log("Logout error ", err);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className='mt-20 text-[3rem]'>Logout</div>
    );
};

export default Logout;
