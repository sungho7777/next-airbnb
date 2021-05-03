import { NextApiRequest, NextApiResponse } from "next"
import{ StoredUserType } from "../../../types/user"
import bcrypt from "bcryptjs"
import Data from '../../../lib/data/index';
import jwt from "jsonwebtoken";
import React from 'react';
import { signupAPI } from '../../../lib/api/auth';
// import { SignUpAPIBody } from "../../../lib/api/auth"

export default async (req: NextApiRequest, res:NextApiResponse) => {
  if(req.method === "POST") {
      const { email, firstname, lastname, password, birthday } = req.body;

      if (!email || !firstname || !lastname || !password || !birthday) {
        res.statusCode = 400;
        return res.send("필수 데이터가 없습니다.")
      }

      const userExist = Data.user.exist({email});
      console.log("userExist : " + userExist);

      if (userExist) {
        res.statusCode = 405;
        res.send("이미 가입된 이메일입니다.");
      }

      const users = Data.user.getList();
      let userId;
      if (users.length === 0) {
        userId = 1;
      } else {
        userId = users[users.length - 1].id + 1;
      }

      const hashedPassword = bcrypt.hashSync(password, 8);
      
      const user = Data.user.find({email});
      console.log("hashedPassword : " + hashedPassword);

      const newUser: StoredUserType = {
        id: userId,
        email,
        firstname,
        lastname,
        password: hashedPassword,
        birthday,
        profileImage: "/static/image/default_user_profile_image.jpg",
      };

      Data.user.write([...users, newUser]);

      const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
      console.log("token : "+ token);

      res.setHeader(
        "Set-Cookie",
        `access_token=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3).toISOString()}; httponly`
      );

      const newUserWithoutPassword: Partial<Pick<StoredUserType,"password">> = newUser;

      // delete을 사용하여 객체의 속성을 제거할 수 있다.
      // 비밀번호가 일치한다면, 유저 정보에서 password를 제거하여 보내고, 회원가입 떄와 동일하게 token을 전달하도록 한다.
      delete newUserWithoutPassword.password;
      res.statusCode = 200;
      return res.send(newUser);
    }

    res.statusCode = 405;

    return res.end();
};