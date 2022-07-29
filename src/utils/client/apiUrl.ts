const envUrl = process.env.ROOT_URL || 'http://localhost:3000';

const usersUrl = '/api/users';

export const registerUrl = () => `${envUrl}${usersUrl}/register`;
export const loginUrl = () => `${envUrl}${usersUrl}/login`;
export const refreshTokenUrl = () => `${envUrl}${usersUrl}/refreshToken`;

const postsUrl = '/api/post';

export const getPostsUrl = () => `${envUrl}${postsUrl}/getPosts`;
export const uploadPostUrl = () => `${envUrl}${postsUrl}/uploadPost`;

export const getAvatarUrl = (username) =>
  `https://res.cloudinary.com/drjffngwz/image/upload/q_90,c_fill,h_150,w_150/v1653415525/nextinsta/thumbnails/${username}`;
