import type { NextApiRequest, NextApiResponse } from 'next';
import promiseUtil from 'utils/server/promiseUtil';
import { refreshTokenUrl } from 'utils/server/apiUrl';
import wrongMethod from 'utils/server/wrongMethod';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const resp = await promiseUtil.post(refreshTokenUrl(), req.body, req.body);
    res.statusCode = resp.code;
    return res.json(resp);
  }
  wrongMethod(req, res);
};
