import { NextResponse } from "next/server";



export default function middleware(req){
    let verify = req.cookies.get("token");
    let url = req.url
    
    if(!verify && url.includes('/admin/dash')){
        return NextResponse.redirect("http://localhost:3000/admin");
    }

    if (verify && url === "http://localhost:3000/admin") {
      return NextResponse.redirect("http://localhost:3000/admin/dash");
    }

 


}