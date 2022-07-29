import type { NextApiRequest, NextApiResponse } from 'next';
import { initCloudinary } from 'config/cloudinary';
import wrongMethod from 'utils/server/wrongMethod';
const cloudinary = require('cloudinary');

initCloudinary();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const images = await cloudinary.v2.search
      .expression(`folder:nextinsta/thumbnails/${req.query.username}`)
      .sort_by('public_id', 'desc')
      .max_results(30);
    console.log('Images', images);
    const linksArray = images.resources.map(
      (el) =>
        `https://res.cloudinary.com/drjffngwz/image/upload/q_100,c_fill,h_293,w_293/v1653415525/${el.public_id}`
    );
    return res.json({ data: linksArray[0] });
  }
  wrongMethod(req, res);
};
