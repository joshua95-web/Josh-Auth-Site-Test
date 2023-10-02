import { NextResponse } from "next/server";
import { fauna } from "@/lib/clients/fauna";
import { fql } from "fauna";

export async function POST(req: Request) {
    const body = await req.json()
    const { username, password }: any = req.body;

    const member = {
        username: username,
    }

const createMember = fql`
    let newMember = Members.create(${member}})
    Credentials.create({
        document: Members.byId(newMember!.id),
        password: ${password},
    })

    `;

    const memberRes: any = await fauna.query(createMember);

    return NextResponse.json(memberRes, { status: 200 })
}
