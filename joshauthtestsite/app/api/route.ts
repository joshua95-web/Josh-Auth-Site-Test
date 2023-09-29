import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Client, fql } from 'fauna';

export default async function handler(
    req: NextRequest
    res: NextResponse 
) {
    const data = req.body
    const id = await createItem(data)
    res.status(200).json({ id })
}

