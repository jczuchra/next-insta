import type { NextApiRequest, NextApiResponse } from 'next';

const wrongMethod = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 405;
  res.json({
    code: 405,
    message: `${req.method} not allowed`,
  });
};

export default wrongMethod;
