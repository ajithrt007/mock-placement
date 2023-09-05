import { NextApiRequest,NextApiResponse } from "next"
import { google } from "googleapis"
import { useParams } from "next/navigation"

type formData = {
    name:string,
    num:string,
    email:string,
    memid:string,
    college:string,
    branch:string,
    yearJoin:string,
    cyear:string,
    referal:string,
    resumeLink:string,
    choice1:string,
    choice2:string,
    confirmation:string
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
)
{
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests are allowed' });
    }
      
    const body = req.body as formData;

    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.GOOGLE_CLIENT_EMAIL,
              private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
          });
          

        const sheets = google.sheets({
            auth,
            version:'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:N1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [
                [
                  body.name,
                  body.num,
                  body.email,
                  body.memid,
                  body.college,
                  body.branch,
                  body.yearJoin,
                  body.cyear,
                  body.referal,
                  body.resumeLink,
                  body.choice1,
                  body.choice2,
                  body.confirmation,
                ],
              ],
            },
          });
          

          return res.status(200).json({ data: response });


    }catch(e:any){
        console.error(e)
        return res.status(500).send({ message: e.message ?? 'Something went wrong'});
    }
}