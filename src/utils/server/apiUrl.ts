const envUrl = process.env.ROOT_URL || 'http://localhost:8080';

const usersUrl = '/v1/users';

export const registerUrl = () => `${envUrl}${usersUrl}/register`;
export const loginUrl = () => `${envUrl}${usersUrl}/login`;
export const meUrl = () => `${envUrl}${usersUrl}/me`;
export const refreshTokenUrl = () => `${envUrl}${usersUrl}/refreshToken`;
