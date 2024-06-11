import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import DashboardPage from "./Dashboard/StdDashboard";
import { Route, Routes } from 'react-router-dom'


import {Faculty} from "./components/FacultyPage/Faculty";
import {Department} from "./departmentPage/department";
import {Class} from "./components/ClassPage/Class";
import {Student} from "./components/StudentsPage/Students";
import {Complain} from "./components/ComplainPage/Complain";
import {Reply} from "./components/ReplyPage/Reply";
import {Users} from "./components/UsersPage/Users";
import {Login} from "./Login/login";
import {LoginPage} from "./StdLogin/StdLogin";
import {HomePage} from "./components/HomePage/Home";
import FAQs from "./components/FAQs_Page/FAQs";
import ViewComplaints from "./components/ViewComplaintsPage/ViewComplaints";

import { useUserContext } from './ContextApi/UserContext'
import Whitescreen from "./Login/whitescreen";

function app() {
  const {isLogin,Role}= useUserContext()
  // console.log(isLogin)
  // const {isLogin}=useUserContext()
  //   console.log('IsLogin',isLogin)
    
  return (
    <>

      {/* <Dashboard/> */}
      <Routes>

        <Route path='/admin' element={<Login/>} />
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/' element={<LoginPage/>} />
        {/* <Route path='/logout' element={<Logout/>} /> */}
        <Route path='*' element={<Whitescreen/>} />

        {/* {isLogin && <Route path='Dashboard' element={Role === "admin" ?<Dashboard /> :<DashboardPage />}> */}
        {isLogin && <Route path='Dashboard' element={<DashboardPage /> }>
        {/* {isLogin && <Route path='Dashboard' element={<Dashboard />}> */}
        {/* <Route path='Dashboard' element={<Dashboard />}> */}
        {/* <Route path='/' element={<Dashboard />}> */}
          <Route path='HomePage' element={<HomePage />} />
          <Route path='Faculty' element={<Faculty />} />
          <Route path='Department' element={<Department />} />
          <Route path='Class' element={<Class />} />
          <Route path='Student' element={<Student />} />
          <Route path='Complain' element={<Complain />} />
          <Route path='Reply' element={<Reply />} />
          <Route path='FAQs' element={<FAQs />} />
          <Route path='ViewComplaints' element={<ViewComplaints />} />
          <Route path='User' element={<Users />} />
         
        </Route>
}
        
      </Routes>

    </>
  );
}

export default app;