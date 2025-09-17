import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import css from "./MyDatePicker.module.css"
import { enUS } from "date-fns/locale";

const customEnglishLocale = {
  ...enUS,
  options: { ...enUS.options, weekStartsOn: 1 }, // 1 = Monday
};

export default function MyDatePicker({ field, form, ...props }) {
  const onChange = (date) => {
    form.setFieldValue(field.name, date);
  };

  const onBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <DatePicker
      locale={customEnglishLocale}
      selected={field.value}
      onChange={onChange}
      onBlur={onBlur}
      placeholderText="Booking date"
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      className={css.calendar}
      {...props}
    />
  );
};
