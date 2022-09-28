import type { NextApiRequest, NextApiResponse } from 'next';
import { initCloudinary } from 'config/cloudinary';
import wrongMethod from 'utils/server/wrongMethod';
import { avatarUrl } from 'utils/server/apiUrl';
const cloudinary = require('cloudinary');

initCloudinary();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const images = await cloudinary.v2.search
      .expression(`folder:nextinsta/thumbnails/${req.query.username}`)
      .sort_by('public_id', 'desc')
      .max_results(30);
    const linksArray = images.resources.map(avatarUrl);
    return res.json({ data: linksArray[0] });
  }
  wrongMethod(req, res);
};
