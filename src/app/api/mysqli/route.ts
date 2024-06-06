
import { NextResponse } from "next/server";
import  {DbConnectionwithquery }from "../../component/dbconfig";
import { writeFile } from "fs/promises";
import { URL } from "url";

// export async function GET(req:any) {
//     const query=req
// //    let data= await DbConnectionwithquery(query);
// //    console.log(data);
//     console.log(req.query)
//     return NextResponse.json({"name":query})
    
// }
export async function POST(req:any) {
    const data=await req.formData;
    console.log("thisis file"+data)
//     const nedata=data.get("file")
    
//     const arrdata=await nedata.arrayBuffer()
//     const buffer=Buffer.from(arrdata);
//     console.log(buffer);
//    let  path=`./public/images/${nedata.name}`;
//        writeFile(path,buffer);
    // const q=await req.json()
    // const query=q.query;
//     const data=await query.json()
//    let data= await DbConnectionwithquery(query);
//    console.log(query);
   
    // return NextResponse.redirect(new URL("/",req.url));
    return NextResponse.json({"message":"successfull"})
    
}