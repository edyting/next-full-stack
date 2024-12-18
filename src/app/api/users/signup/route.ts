import connect from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest as req,NextResponse as res } from 'next/server';
import bcryptjs from "bcryptjs"



connect();


export async function POST (request : req) {
    try {
        const reqBody = await request.json();
        const { username,password, email } = reqBody;
        console.log("request body" + reqBody);

        // vaditation
        // 1- check if user exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.json({error:"User already exist"},{status:400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // create a new user in the database
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        // saving to database
        const newSavedUser = await newUser.save();
        console.log("userPassword"+newSavedUser.password);

        return res.json({
            message: "User created successfully ",
            success: true,
            newSavedUser
        }, { status: 200 })
        console.log(newSavedUser.password);
        
    } catch (error) {
        return res.json({ error: error.message }, { status: 500 });
        
    }
}