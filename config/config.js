import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT,
    mongoPassword: process.env.DB_PASSWORD,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPass: process.env.ADMIN_PASS,
    mailAccount: process.env.GMAIL_ACCOUNT,
    mailPass: process.env.GMAIL_APP_PASSWORD
}