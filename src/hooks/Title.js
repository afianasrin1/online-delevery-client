import { useEffect } from "react";

const Title = (title) => {
  useEffect(() => {
    document.title = `${title} || Get Pretty Gift`;
  }, [title]);
};
export default Title;
