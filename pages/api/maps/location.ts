import {NextApiResponse, NextApiRequest} from "next";
import axios from "axios";

export default async(req:NextApiRequest, res:NextApiResponse)=>{

    // 422 page

    res.statusCode = 405;

    return res.end();
};