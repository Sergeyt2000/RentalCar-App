import { SyncLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
 
    return (
        <div className={css.loading} >
      <SyncLoader color="#48d0bc" margin={10} size={19} />
    </div>
  );
}
