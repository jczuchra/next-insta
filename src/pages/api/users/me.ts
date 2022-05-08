import type { NextApiRequest, NextApiResponse } from 'next';
import promiseUtil from 'utils/server/promiseUtil';
import { meUrl } from 'utils/server/apiUrl';
import wrongMethod from 'utils/server/wrongMethod';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const cookies = req.cookies;
    const resp = await promiseUtil.get(meUrl(), cookies);
    res.statusCode = resp.code;
    return res.json(resp);
  }
  wrongMethod(req, res);
};
