import { Request, Response, NextFunction } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { URLSearchParams } from "url";
dotenv.config();

const env = process.env;

export const getToken = async () => {
  const URL = env.GET_TOKEN;

  const value = {
    grant_type: env.GRANT_TYPE!,
    client_id: env.CLIENT_ID!,
    client_secret: env.CLIENT_SECRET!,
    username: env.USERNAME!,
    password: env.PASSWORD!,
  };
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const {
      data: { access_token },
    } = await axios.post(
      URL!,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "687E1D75-6BEE-4FB8-B79A-A9B0142E0282",
        client_secret: "3e8HCTcSv4zxCQNLqSppfX3rgN4x7682u9Y",
        username: "EugenePando@gmail.com",
        password: "greatSystem30Passw0rd3!",
      }),
      config
    );
    // console.log("ACCESS TOKEN:", access_token);
    return access_token;
  } catch (e) {
    console.log("current user ERROR:", e);
    // console.error(JSON.stringify(e, undefined, 2));
  }
};
