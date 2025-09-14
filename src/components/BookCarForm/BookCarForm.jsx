import css from "./BookCarForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./formSchema.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function BookCarForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    iziToast.success({
      message: "Form was sent successfully!",
      position: "bottomCenter",
    });
    resetForm();
  };
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.inputsFields}>
            <div className={css.field}>
              <Field name="name" placeholder="Name*" className={css.input} />
              <ErrorMessage name="name" component="p" className={css.error} />
            </div>
            <div className={css.field}>
              <Field
                name="email"
                placeholder="Email*"
                type="email"
                className={css.input}
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>
            <div className={css.field}>
              <Field
                name="bookingDate"
                placeholder="Booking date*"
                className={css.input}
              />
              <ErrorMessage
                name="bookingDate"
                component="p"
                className={css.error}
              />
            </div>
            <Field
              name="comment"
              placeholder="Comment"
              as="textarea"
              rows={3}
              className={css.input}
            />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
