import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  success: boolean;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    await sgMail.send({
      to: "rafal.mederak1@gmail.com",
      from: "portfolio@rafal.mederak.com",
      subject: `${req.body.name} sent you a message`,
      text: `Email => ${req.body.email}`,
      html: `<p><b>Name: </b>${req.body.name}<br /><b>Email: </b>${req.body.email}<br /><b>Message: </b>${req.body.message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(200).json({ success: false });
  }
}

export default sendEmail;
