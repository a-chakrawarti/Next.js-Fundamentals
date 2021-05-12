import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ status: "ok", num: Math.floor(Math.random() * 10) });
}

// https://127.0.0.1:3000/api/endpoint
