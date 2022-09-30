import type { NextApiRequest, NextApiResponse } from 'next';
import promiseUtil from 'utils/server/promiseUtil';
import setCookie from 'utils/server/setCookie';
import { loginUrl, meUrl } from 'utils/server/apiUrl';
import wrongMethod from 'utils/server/wrongMethod';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const resp = await promiseUtil.post(loginUrl(), req.body);
    if (resp.data) {
      const cookiesData = [
        {
          name: 'refreshToken',
          data: JSON.stringify({
            refreshToken: resp.data.refreshToken,
            accessToken: resp.data.accessToken,
          }),
          maxAge: 60 * 60 * 24 * 7, // 1 week
        },
        {
          name: 'accessToken',
          data: resp.data.accessToken,
          maxAge: 60 * 10, // 10 minutes
        },
      ];
      setCookie(res, cookiesData);
    }

    const user = await promiseUtil.get(meUrl(), resp.data);
    res.statusCode = resp.code;
    return res.json({
      code: resp.code,
      message: resp.message,
      user: user.data,
    });
  }
  wrongMethod(req, res);
};
