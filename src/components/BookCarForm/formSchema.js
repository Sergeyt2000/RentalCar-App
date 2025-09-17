import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date().nullable(),
  comment: Yup.string().max(1000, "Comment must be maximum 1000 characters"),
});


