export default () => {
  const { user } = localStorage;
  try {
    const json = user && JSON.parse(user);
    if (!json?.username) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
