import { NextApiRequest, NextApiResponse } from 'next'

import { fetchSheet, DiabetesData } from '@/lib/fetchSheet'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DiabetesData>
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(403)
  }

  const sheetData = await fetchSheet()
  res.status(200).json(sheetData)
}
