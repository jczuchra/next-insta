const promiseUtil = {
  get: async (url: string, cookies?: Cookies) => {
    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
        Authorization: 'Bearer ' + cookies?.accessToken,
      },
    });
    const json = await resp.json();
    return json;
  },
  post: async (url: string, body: object, cookies?: Cookies) => {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.API_KEY,
        Authorization: 'Bearer ' + cookies?.accessToken,
      },
      body: JSON.stringify(body),
    });
    const json = await resp.json();
    return json;
  },
};

interface Cookies {
  accessToken?: string;
  refreshToken?: string;
}

export default promiseUtil;
