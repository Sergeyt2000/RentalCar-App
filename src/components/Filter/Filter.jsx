import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filter/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";


const validationSchema = Yup.object({
  mileageFrom: Yup.number()
    .min(0, "Mileage cannot be negative")
    .test(
      "is-less-than-mileageTo",
      "Mileage From must be less than Mileage To",
      function (value) {
        const { mileageTo } = this.parent;
        return !mileageTo || !value || value <= mileageTo;
      }
    ),
  mileageTo: Yup.number().min(0, "Mileage cannot be negative"),
});

export default function Filter({ brands = [] }) {
  const dispatch = useDispatch();
  const initialValues = {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  };
  
  const handleSubmit = (values) => {
    dispatch(setFilters(values));
    dispatch(fetchCars(values));
  };
  return (
    <div className={css.filterContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* {({ errors, touched }) => ( */}
        <Form className={css.filterForm}>
          <div className={css.filterField}>
            <label className={css.label} htmlFor="brand">
              Car Brand
            </label>
            <Field className={css.select} as="select" name="brand">
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </div>

          <div className={css.filterField}>
            <label className={css.label} htmlFor="price">
              Price/1 hour
            </label>
            <Field className={css.select} as="select" name="price">
              <option value="">Choose a price</option>
              <option value="30">30$</option>
              <option value="40">40$</option>
              <option value="50">50$</option>
              <option value="60">60$</option>
              <option value="70">70$</option>
              <option value="80">80$</option>
            </Field>
          </div>

          <div className={css.filterField}>
            <label className={css.label} htmlFor="mileageFrom">
              Car mileage / km
            </label>
            <div>
              <Field
                className={css.input}
                name="mileageFrom"
                placeholder="From"
              ></Field>
              <ErrorMessage
                name="mileageFrom"
                component="div"
                className={css.error}
              />
              <Field
                className={css.input}
                name="mileageTo"
                placeholder="To"
              ></Field>
              <ErrorMessage
                name="mileageTo"
                component="div"
                className={css.error}
              />
            </div>
          </div>

          <button className={css.btn} type="submit">Search</button>
        </Form>
        {/* )} */}
      </Formik>
    </div>
  );
}
