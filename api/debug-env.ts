export default function handler(req, res) {
  return res.status(200).json({
    hasEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
    hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    hasSpreadsheetId: !!process.env.SPREADSHEET_ID
  });
}
