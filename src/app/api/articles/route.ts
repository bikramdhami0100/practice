

import dbConnect from '@/app/mongodb/MongoCon';
import Itemschema from '@/app/mongodb/Itemschema';
import { NextResponse } from 'next/server';
import Article from '@/app/mongodb/Itemschema';

export async function POST(req: any) {
  await dbConnect();
  const { page = 1, limit = 10 } = req.query;
  const articles = await Article.find({})
  .limit(limit * 1)
  .skip((page - 1) * limit)
  .exec();

  const count=await Article.countDocuments();
  return NextResponse.json({ articles,
     totalpages:Math.ceil(count/limit),
     currentpage:page,
     status:200

   });
}
