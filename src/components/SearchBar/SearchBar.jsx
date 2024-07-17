const SearchBar = () => {
  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <Toaster />
      </div>
    </header>
  );
};

export default SearchBar;
