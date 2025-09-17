import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filter/slice.js";
import { useState, useEffect } from "react";
import { getBrands } from "../../services/brands.js";

const validationSchema = Yup.object({
  minMileage: Yup.number()
    .min(0, "Mileage cannot be negative")
    .test(
      "is-less-than-maxMileage",
      "Mileage From must be less than Mileage To",
      function (value) {
        const { maxMileage } = this.parent;
        return !value || !maxMileage || value <= maxMileage;
      }
    ),
  maxMileage: Yup.number()
    .min(0, "Mileage cannot be negative")
    .test(
      "is-greater-than-minMileage",
      "Mileage To must be greater than Mileage From",
      function (value) {
        const { minMileage } = this.parent;
        return !value || !minMileage || value >= minMileage;
      }
    ),
});

// export default function Filter({ brands = [] }) {
export default function Filter() {
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await getBrands();
        setBrands(response);
      } catch (error) {
        console.log("Failed to load brands", error);
      }
    };

    fetchBrands();
  }, []);

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };
  return (
    <div className={css.filterContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
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
            <label className={css.label} htmlFor="rentalPrice">
              Price/1 hour
            </label>
            <Field className={css.select} as="select" name="rentalPrice">
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
                className={css.inputLabelFrom}
                name="From"
                disabled
                value="From"
              />
              <Field className={css.inputFrom} name="minMileage"></Field>
              {/* <ErrorMessage
                name="minMileage"
                component="div"
                className={css.error}
              /> */}
              <Field
                className={css.inputLabelTo}
                name="To"
                disabled
                value="To"
              />
              <Field className={css.inputTo} name="maxMileage"></Field>
              <ErrorMessage
                name="maxMileage"
                component="div"
                className={css.error}
              />
            </div>
          </div>

          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
