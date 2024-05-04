import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import DashboardPage from "./Dashboard/StdDashboard";
import { Route, Routes } from 'react-router-dom'


import {Faculty} from "./components/FacultyPage/Faculty";
import {Department} from "./departmentPage/department";
import {Class} from "./components/ClassPage/Class";
import {Student} from "./components/StudentsPage/Students";
import {Complain} from "./components/ComplainPage/Complain";
import {Users} from "./components/UsersPage/Users";
import {Login} from "./Login/login";
import {LoginPage} from "./StdLogin/StdLogin";
import HomePage from "./components/HomePage/Home";

import { useUserContext } from './ContextApi/UserContext'
import Whitescreen from "./Login/whitescreen";

function app() {
  const {isLogin}= useUserContext()
  console.log(isLogin)
  // const {isLogin}=useUserContext()
  //   console.log('IsLogin',isLogin)
    
  return (
    <>

      {/* <Dashboard/> */}
      <Routes>

        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/' element={<LoginPage/>} />
        {/* <Route path='/logout' element={<Logout/>} /> */}
        <Route path='*' element={<Whitescreen/>} />

        {/* {isLogin && <Route path='Dashboard' element={<Dashboard />}> */}
        {isLogin && <Route path='Dashboard' element={<DashboardPage />}>
        {/* <Route path='Dashboard' element={<Dashboard />}> */}
        {/* <Route path='/' element={<Dashboard />}> */}
          <Route path='HomePage' element={<HomePage />} />
          <Route path='Faculty' element={<Faculty />} />
          <Route path='Department' element={<Department />} />
          <Route path='Class' element={<Class />} />
          <Route path='Student' element={<Student />} />
          <Route path='Complain' element={<Complain />} />
          <Route path='User' element={<Users />} />
         
        </Route>
}
        
      </Routes>

    </>
  );
}

export default app;