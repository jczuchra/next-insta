import cookie from 'cookie';
import type { NextApiResponse } from 'next';

const setCookie = (
  res: NextApiResponse,
  cookiesData: {
    name: string;
    data: string;
    maxAge: number;
  }[]
) =>
  res.setHeader(
    'Set-Cookie',
    cookiesData.map((el) =>
      cookie.serialize(el.name, el.data, {
        httpOnly: true,
        maxAge: el.maxAge,
        path: '/',
      })
    )
  );

export default setCookie;
