import { getClientIp, sendApiEvent } from "@/utils/analytics/facebook/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { eventName, eventId, eventData, email } = req.body;
    const userAgent = req.headers['user-agent'];
    const ipAddress = getClientIp(req);
    const result = await sendApiEvent(eventName, eventId, eventData, email, userAgent, ipAddress);
    res.status(200).json(result);
};