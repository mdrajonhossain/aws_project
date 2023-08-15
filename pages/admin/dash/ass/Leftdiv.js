import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { ImGift, ImCart } from "react-icons/im";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiFillBulb, AiFillSetting, AiOutlineAppstore } from "react-icons/ai";

import { FiAward, FiBookmark } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiUserSearchLine } from "react-icons/ri";




export default function Leftdiv() {
 
 



  return (
    <>
      <div className="left_side">

          <div className="panel-heading">
            
            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash">
                <div className="sub_menu_btn"><AiOutlineAppstore /> Dashboard </div>
              </Link>
            </div>

            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/registrat_user">
                <div className="sub_menu_btn"><FiAward /> Registrate Quize</div>
              </Link>
            </div>

            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/quize_catagory">
                <div className="sub_menu_btn"><FiAward /> Quize Catagory</div>
              </Link>
            </div>
            
            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/public_user">
                <div className="sub_menu_btn"><FiBookmark /> Public Quize</div>
              </Link>
            </div>

            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/client_user">
                <div className="sub_menu_btn"><RiUserSearchLine /> User</div>
              </Link>
            </div>

            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/client_payment">
                <div className="sub_menu_btn"><IoCartOutline /> Client Payment</div>
              </Link>
            </div>            

            <div style={{paddingLeft:'15px', color:'white'}}>
              <Link href="/admin/dash/setting">
                <div className="sub_menu_btn"><AiFillSetting /> Setting</div>
              </Link>
            </div>            

          </div>
      </div>
    </>
  )
}

