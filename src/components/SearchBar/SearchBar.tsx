import { Formik, Form, Field } from "formik";
import { FaMagnifyingGlass } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header className={css.headerSearch}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          values.query === ""
            ? toast.error("Search query cannot be empty!")
            : onSearch(values.query);

          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Toaster position="top-right" />
          <div className={css.container}>
            <button className={css.searchButton} type="submit">
              <FaMagnifyingGlass />
            </button>
            <Field
              className={css.searchInput}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
}
