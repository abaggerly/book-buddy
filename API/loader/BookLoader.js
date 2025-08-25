const bookLoader = async ({ params }) => {
  try {
    const res = await fetch(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${params.id}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default bookLoader;