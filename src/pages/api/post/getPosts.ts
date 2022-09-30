import type { NextApiRequest, NextApiResponse } from 'next';
import wrongMethod from 'utils/server/wrongMethod';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.json({ data: mock });
  }
  wrongMethod(req, res);
};

const mock = [
  {
    img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/280980686_114575351089849_4334615759623177026_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=DQSoi4F0824AX-2-DZ_&tn=rx2IBnMBlJ64a2xt&edm=AIQHJ4wBAAAA&ccb=7-4&ig_cache_key=MjgzOTQ2Nzc2MDQyMjE4MTI3OA%3D%3D.2-ccb7-4&oh=00_AT-je_Wh_Uq9qJzqBIZh0p8bdgmV999u64L1_cDi0_Da2g&oe=6289EF3A&_nc_sid=7b02f1',
    author: {
      username: 'maczfit',
      avatar:
        'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/81250009_510124776524481_4106273710351056896_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=zBQFt_9zSNUAX82rdJ9&edm=AEF8tYYBAAAA&ccb=7-4&oh=00_AT8weFNpZVWybuKXXDn0V6b-KhRHsUzAAhjzDYH9mLGoow&oe=628A39AC&_nc_sid=a9513d',
    },
    description: 'Co w tym tygodniu nasi kucharze zaserwują Wam na kolację? 🍊',
    place: '',
    liked: true,
    saved: false,
    likes: 121,
    date: new Date(),
  },
  {
    img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/280942419_331219995870545_3925402135554697703_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=-1MhWC6sP7YAX-7Jeqf&edm=APU89FABAAAA&ccb=7-4&oh=00_AT-Z4uog9r9F17GAQSVuZMzg91T6bUHf1q65Vcu_QPkO2w&oe=6289A96D&_nc_sid=86f79a',
    author: {
      username: 'nataliaszukala',
      avatar:
        'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/276144468_364032902242725_6233153053339564245_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=0AQ-UW2m_6UAX9i6GWF&edm=AEF8tYYBAAAA&ccb=7-4&oh=00_AT-ZRmaMhV0iDKFaekkpeI4KVOC0daZdUiF_T1XY5IVQ_g&oe=628A6694&_nc_sid=a9513d',
    },
    description: 'Co w tym tygodniu nasi kucharze zaserwują Wam na kolację? 🍊',
    place: 'Warsaw, Poland',
    liked: true,
    saved: false,
    likes: 313,
    date: new Date(),
  },
  {
    img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/280719707_167862465613118_7293075086979536429_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=FGTskwIYk5sAX-pWP-r&edm=AJ9x6zYBAAAA&ccb=7-4&ig_cache_key=MjgzNzk0NDMzMzcxOTc4OTkzNA%3D%3D.2-ccb7-4&oh=00_AT-O_iyQMLncOn_6Y5LS6XVMqSUAuP-JuWmVjoFLEzDaEA&oe=6289B7F6&_nc_sid=cff2a4',
    author: {
      username: 'jasonkoon',
      avatar:
        'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/240770018_1035296293948729_7958704531439626195_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=lfP8uhB2YaoAX-HjDrJ&edm=AEF8tYYBAAAA&ccb=7-4&oh=00_AT_Cu91t2B3s5q5NlwMs8eq_NRqWerkmqxxeOfot4_-v0A&oe=6289ECB1&_nc_sid=a9513d',
    },
    description: 'Big Chunky likes Spain.',
    place: '',
    liked: false,
    saved: true,
    likes: 313,
    date: new Date(),
  },
  {
    img: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/280642747_512066760401769_8048315221037616053_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=HpKm4mAn2voAX9b2mFj&edm=AJ9x6zYBAAAA&ccb=7-4&ig_cache_key=MjgzNzM3MzM2NDM2NjE0OTkxMw%3D%3D.2-ccb7-4&oh=00_AT_mGis89v8lMoj_C8_wxGLzsFF_9P2NFaw9H5-n2WY97Q&oe=6289321E&_nc_sid=cff2a4',
    author: {
      username: 'iceman_hof',
      avatar:
        'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/20687104_373447083071014_2355263668880408576_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=MhShtl-s6sQAX8w5n5c&tn=rx2IBnMBlJ64a2xt&edm=AEF8tYYBAAAA&ccb=7-4&oh=00_AT8x0yZP4tyyghnXXPxFYp-WtFyGPlkKiphHnxfBSfA2-Q&oe=62895CC3&_nc_sid=a9513d',
    },
    description:
      'Whatever it takes, I want to feel that this body is serving me. So I do my splits, suspend my body on one arm, balance on or hang from one finger even. My middle finger, naturally. I still hold the world record for that, you know.\
    #iceman #wimhof #splits #flexibility #strength #balance #power #breathe #strong #happy #healthy #wimhofmethod',
    place: '',
    liked: true,
    saved: false,
    likes: 15326,
    date: new Date(),
  },
];
