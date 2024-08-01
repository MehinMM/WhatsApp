import React, { Suspense } from "react";
import { SignIn,SignUp,Chat,Home} from "../pages";

import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import Layout from '../layout/index'



const Index = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<h1>Yuklenir...</h1>}>
            <Routes>
                <Route path="/" element={<Outlet/>}>

                <Route path="signIn" element={<SignIn/>}/>
                <Route path="signUp" element={<SignUp/>}/>

                <Route path="home" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="chat" element={<Chat/>}/>
                
                </Route>





                </Route>
            </Routes>

        </Suspense>
    </BrowserRouter>
  )
}

export default Index
