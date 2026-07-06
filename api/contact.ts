import { google } from 'googleapis';

export default async function handler(req, res) {
  console.log("API reached");
  console.log("Request received:", req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    console.log("Validating request");
    const { name, organization, email, phone, requirement, message } = req.body;

    console.log("Environment check:", {
      hasEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSpreadsheetId: !!process.env.SPREADSHEET_ID
    });

    console.log("Connecting to Google");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get date in Asia/Kolkata timezone
    const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log("Appending row");
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Leads!A:G', // columns: Date | Name | Organization | Email | Phone | Requirement | Message
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[dateStr, name, organization, email, phone, requirement, message]],
      },
    });

    console.log("Append successful. Response status:", response.status);
    console.log("Returning response");
    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Google Sheets API error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Internal Server Error', error: String(error) });
  }
}
