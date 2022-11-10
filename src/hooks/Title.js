import { useEffect } from "react";

const Title = (title) => {
  useEffect(() => {
    document.title = `${title} || FOOD & MASTY`;
  }, [title]);
};
export default Title;
