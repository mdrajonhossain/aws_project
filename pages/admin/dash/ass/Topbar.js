import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Cookies from "js-cookie";




export default function Topbar() {
  const router = useRouter();
 
 
 const logout = ()=>{    
    
    Cookies.remove("token");
    router.push("/admin");
 }
 

  return (
    <>
        <div className="header">
            <div className="header_company_name">Shikhon School</div>
            <div className="header_profile">                
                <div className="header_toggle" onClick={()=>logout()}>Logout</div>
                <div className="header_toggle">Profile</div>
            </div>          
         </div>
    </>
  )
}
