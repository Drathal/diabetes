import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../interfaces'

export const sampleUserData: User[] = [{ id: 101, name: 'Tobi' }]

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
