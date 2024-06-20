import axios from "axios";
import { toast } from "react-toastify";

export const createPengarang = (data, isLoading, navigate) => async (dispatch) => {
  try {
    isLoading(true);

    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/pengarang`, data)
      .then((res) => {
        console.log(res);
        toast.success("Add PENGARANG successful", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(``);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);

        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        isLoading(false);
      });

    dispatch({ type: "CREATE_PENGARANG", payload: "success" });
  } catch (err) {
    toast.error("Add Articel Error", {
      position: toast.POSITION.TOP_CENTER,
    });
    isLoading(false);
  }
};
