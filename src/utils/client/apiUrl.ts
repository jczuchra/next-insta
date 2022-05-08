const envUrl = process.env.ROOT_URL || 'http://localhost:3000';

const usersUrl = '/api/users';

export const registerUrl = () => `${envUrl}${usersUrl}/register`;
export const loginUrl = () => `${envUrl}${usersUrl}/login`;
export const refreshTokenUrl = () => `${envUrl}${usersUrl}/refreshToken`;
