import { useEffect } from "react";
import { useAuthvalidateMutation } from "../slices/usersApiSlice";

const Validate = () => {
  const [validateGoogle] = useAuthvalidateMutation();

  useEffect(() => {
    const validateGoogleAsync = async () => {
      try {
        // const res = await validateGoogle().unwrap();
      } catch (error) {
        // console.error(error);
      }
    };

    validateGoogleAsync();
  }, [validateGoogle]);

  return <></>;
};

export default Validate;
