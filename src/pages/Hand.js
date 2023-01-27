import { hand } from "../store/handStore";

import finger from "../assets/default-finger.png";

import PageLayout from "../components/utility/PageLayout";

const HandPage = () => {
  return (
    <>
      <PageLayout
        header="จุดไหนที่คุณปวดนิ้วมากที่สุด ?"
        parts={hand}
        mainPic={finger}
        to="/stomach"
        topic="finger"
        name="hand"
      />
    </>
  );
};

export default HandPage;
