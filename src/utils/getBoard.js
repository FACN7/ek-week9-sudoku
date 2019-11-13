
const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
// `https://api.github.com/users/${username}?access_token=${token}`
 const getBoard = url => {
  return fetch(url)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
}
export default getBoard;