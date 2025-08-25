const booksLoader = async () => {
  try {
    const res = await fetch(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default booksLoader;