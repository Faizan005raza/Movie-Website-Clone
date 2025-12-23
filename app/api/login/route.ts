import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {email, password} = await request.json();

    if(email === "faizan005raza@gmail.com" && password === "Welcome@92"){
        const response = NextResponse.json({success: true});

        response.cookies.set("isLoggedIn", "true", {
            httpOnly: true,
            path: "/",
        });
        return response;
    }

    return NextResponse.json(
        {success: false, message: "Invalid Credentials"},
        {status: 401}
    );
}