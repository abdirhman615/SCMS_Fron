import { createContext, useEffect, useState } from "react";
import { useContext } from 'react';
import jscookie from "js-cookie";
const UserContextApi = createContext()
// const jwtdecode = from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {Login} from "../Login/login";
import {LoginPage} from "../StdLogin/StdLogin";
export const UserContextProvider = ({ children }) => {

    const usenavigate = useNavigate();
    const [email, setEmail] = useState('');
    const [Std, setStd] = useState('');
    const [IdStd, setIdStd] = useState('');
    const [Role, setRole] = useState('');
    const [STDID, setSTDID] = useState('');
    const [COMID, setCOMID] = useState('');
    const [Stdname, setStdname] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();


    const LogOut = () => {

        console.log('Log Out');
        jscookie.remove('token')
        setIsLogin(false);
        usenavigate("/")
    }

    useEffect(() => {
        const token = jscookie.get('token')

        if (!token ) {
            if (window.location.pathname == '/admin') {
                navigate('/admin'); // Redirect to admin login
              } else {
                navigate('/'); // Redirect to regular login
              }
        // if (!token || (window.location.pathname !== "/admin" && window.location.pathname !== "/")) {
            
        }else {
            // console.log(jwtDecode(token))
            const jwtdecoded = jwtDecode(token)
            // console.log(jwtdecoded)
            setEmail(jwtdecoded.username);
            setRole(jwtdecoded.Role);
            setStd(jwtdecoded.Email);
            setIdStd(jwtdecoded.STD_id);
            setSTDID(jwtdecoded.id);
            setCOMID(jwtdecoded._id);
            setStdname(jwtdecoded.Stdname);
            setIsLogin(true);

           
            
        }
    }, [])

    
    // useEffect(() => {
    //     const token = jscookie.get('token');
    
    //     const handleToken = () => {
    //         try {
    //             if (!token) {
    //                 navigate("/");
    //             } else {
    //                 const  = jwtDecode(token);
    //                 setEmail(jwtdecoded.email);
    //                 setIsLogin(true);
    //             }
    //         } catch (error) {
    //             // Handle the error (e.g., log it or redirect to an error page)
    //             console.error("Error decoding JWT token:", error);
    //             navigate("/");
    //         }
    //     };
    
    //     handleToken();
    // }, []);
    

    return (
        <UserContextApi.Provider value={{ email,Std,IdStd,Stdname ,COMID,STDID,LogOut, isLogin, setIsLogin ,Role,setRole}}>
           
            {children}
        </UserContextApi.Provider>
    )




}

export const useUserContext =()=>{
    return useContext(UserContextApi)
}

