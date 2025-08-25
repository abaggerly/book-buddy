const accountLoader = async () => {
  try {
    const token = sessionStorage.getItem('token');

    const res = await fetch(
      'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default accountLoader;