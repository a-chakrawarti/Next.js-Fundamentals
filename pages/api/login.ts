import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "aduiahduiaodjkasdklahdadadafgdfasda";

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Auth Failed");
    return;
  }

  const { username, password } = req.body;

  // Response
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
}
