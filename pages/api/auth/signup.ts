import {NextApiRequest, NextApiResponse} from "next";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import Data from "../../../lib/data";
import { SingUpAPIBody } from "../../../types/auth";
import { StoredUserType } from "../../../types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    //* 계정 생성하기
    if (req.method === "POST") {
            
        //* 값을 받았는지 확인
        const {
            body,
        }: {
            body: SingUpAPIBody;
        } = req;
        

        const { email, firstname, lastname, password, birthday } = body;
        if (!email || !firstname || !lastname || !password || !birthday) {
            res.statusCode = 400;
            return res.send("필수 데이터가 없습니다.");
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        const users = await Data.user.getList();
        let userId;
        if(users.length===0){
            userId=1;
        }else{
            userId=users[users.length-1].id +1;
        }
        const newUser:StoredUserType={
            id:userId,
            email,
            firstname,
            lastname,
            password: hashedPassword,
            birthday,
            profileImage:"/staic/image/user/default_user_profile_image.jpg",
        };

        Data.user.write([...users, newUser]);

        const userExists = await Data.user.exist({ email });
        if (userExists) {
            res.statusCode = 409;
            return res.send("이미 가입한 이메일 입니다.");
        }

        const token = jwt.sign(String(newUser.id), process.env.JWT_SECRETI);
        res.setHeader(
            "Set-Cookie",
            `access_token=${token}; path=/; expires=${new Date(
                Date.now() + 60 * 60 * 24 * 1000 * 3 //3일
            )}; httponly`
        );



        return res.end();
    }


    res.statusCode = 405;

    return res.end();
};



/*

    263 page 
        새 유저 리덕스 저장시 소스 코딩 어디에??





*/