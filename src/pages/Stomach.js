import { stomach } from "../store/stomachStore";

import abs from "../assets/default-abs.png";

import PageLayout from "../components/utility/PageLayout";

const StomachPage = () => {
  return (
    <>
      <PageLayout
        header="ปวดท้องที่บริเวณใดมากที่สุด ?"
        parts={stomach}
        mainPic={abs}
        to="/hand"
        topic="abs"
        name="stomach"
      />
    </>
  );
};

export default StomachPage;
