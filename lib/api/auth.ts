import axios from "axios";
import { SingUpAPIBody } from "../../types/auth";
import {UserType} from "../../types/user";

// * 회원가입 body
export const signupAPI = (body: SingUpAPIBody)=>
    axios.post<UserType>("/api/auth/signup", body);