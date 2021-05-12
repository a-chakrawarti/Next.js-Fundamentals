import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  // Request: ?q=<query>
  console.log("Request Query: ", req.query);

  // Response
  res.statusCode = 200;
  res.setHeader("Set-Cookie", "VSCode");
  res.json({ status: "ok", num: Math.floor(Math.random() * 10) });
}

// https://127.0.0.1:3000/api/endpoint
