import type { NextApiRequest, NextApiResponse } from 'next';
import { initCloudinary } from 'config/cloudinary';
import wrongMethod from 'utils/server/wrongMethod';
const cloudinary = require('cloudinary');

initCloudinary();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    cloudinary.v2.uploader.upload(JSON.parse(req.body.data), {
      folder: '/nextinsta/szczuri4',
    });

    return res.json({});
  }
  wrongMethod(req, res);
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb', // Set desired value here
    },
  },
};
