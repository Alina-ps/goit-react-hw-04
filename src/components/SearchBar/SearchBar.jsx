import { Field, Form, Formik } from "formik";

const SearchBar = () => {
  const initialValues = { query: "" };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          ></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
