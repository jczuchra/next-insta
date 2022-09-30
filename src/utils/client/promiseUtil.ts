const promiseUtil = {
  get: async (url: string) => {
    const resp = await fetch(url);
    if (resp.redirected) {
      document.location = resp.url;
      return;
    }
    return resp.json();
  },
  post: async (url: string, body: object) => {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (resp.redirected) {
      document.location = resp.url;
      return;
    }
    return resp.json();
  },
};

export default promiseUtil;
