const promiseUtil = {
  get: async (url: string) => {
    const resp = await fetch(url);
    const json = await resp.json();
    return json;
  },
  post: async (url: string, body: object) => {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const json = await resp.json();
    return json;
  },
};

export default promiseUtil;
