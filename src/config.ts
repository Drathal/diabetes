import { validateConfig, Config } from './lib/validateConfig'

const config: Config = {
  sheet_id: process.env.GOOGLE_SHEET_ID || '',
  client_email: process.env.GOOGLE_SHEET_EMAIL || '',
  private_key: (process.env.GOOGLE_SHEET_KEY || '').replace(/\\n/g, '\n')
}

const getConfig = (c: Config) => (validateConfig(c) ? c : c)

export default getConfig(config)
