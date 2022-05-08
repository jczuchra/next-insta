import type { NextApiRequest, NextApiResponse } from 'next';
import { registerUrl } from 'utils/server/apiUrl';
import promiseUtil from 'utils/server/promiseUtil';
import wrongMethod from 'utils/server/wrongMethod';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const resp = await promiseUtil.post(registerUrl(), req.body);
    res.statusCode = resp.code;
    return res.json(resp);
  }
  wrongMethod(req, res);
};
