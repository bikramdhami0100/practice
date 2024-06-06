import { DbConnectionwithquery } from "@/app/component/dbconfig";
import { NextResponse } from "next/server";

export async function POST(req:any) {
    const q=await req.json()
    const query=q.query;
//     const data=await query.json()
   let data= await DbConnectionwithquery(query);
//    console.log(query);
   
    return NextResponse.json({"name":"bikramdhami","data":data})
    
}