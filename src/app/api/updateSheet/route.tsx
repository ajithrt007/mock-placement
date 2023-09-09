import { NextResponse } from 'next/server'
import { google } from 'googleapis';
 
export async function GET(res:NextResponse<string>) {

  try {
    const client = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_EMAIL, undefined, process.env.GOOGLE_PRIVATE_KEY, ['https://www.googleapis.com/auth/spreadsheets']
    );

    client.authorize(async function(err, tokens) {
        if (err) {
            // return res.send(JSON.stringify({error: true}));
            return NextResponse.json({error: true})
        }

        const gsapi = google.sheets({version:'v4', auth: client});

        //CUSTOMIZATION FROM HERE
        const opt = {
            spreadsheetId: '1mMuS9AKeXdj8T5accJZ151KWoCccWRPtd-6_IqEQppc',
            range: 'Sheet1!A2:A'
        };

        let data = await gsapi.spreadsheets.values.get(opt);
        if (res.headers) {
          return NextResponse.json({error: false, data: data.data.values});
      }
        return NextResponse.json({error: false, data: data.data.values});
    });
} catch (e:any) {
    return NextResponse.json({error: true, message: e.message});
}
}




  // try {
  //   const target = ['https://www.googleapis.com/auth/spreadsheets.readonly',"https://accounts.google.com/o/oauth2/token"];
  //   const jwt = new google.auth.JWT(
  //     process.env.GOOGLE_PRIVATE_KEY_ID,
  //     process.env.GOOGLE_PRIVATE_KEY,
  //     process.env.GOOGLE_SERVICE_EMAIL,
  //     target
  //   );

  //   const sheets = google.sheets({ version: 'v4', auth: jwt });
  //   const response = await sheets.spreadsheets.values.get({
  //     spreadsheetId: process.env.GOOGLE_SHEET_ID,
  //     range: 'Data!A1:U1', // sheet name
  //   });

  //   const rows = response.data.values;
  //   console.log(rows)

  //   if (rows?.length) {
  //     return rows.map((row) => ({
  //       title: row[2],
  //       subtitle: row[3],
  //       code: row[4],
  //       browser: row[5],
  //       short_name: row[17],
  //       emojipedia_slug: row[18],
  //       descriptions: row[19],
  //     }));
  //   }
  // } catch (err) {
  //   console.log("Error occured")
  //   console.log(err);
  // }
  // return [];
