import highlightPip from "../assets/pip-highlight.png";
import highlightDip from "../assets/dip-highlight.png";
import highlightMcp from "../assets/mcp-highlight.png";
import highlightOther from "../assets/others-highlight.png";

import activePip from "../assets/pip-active.png";
import activeDip from "../assets/dip-active.png";
import activeMcp from "../assets/mcp-active.png";

export const hand = [
  {
    name: "dip",
    highlight: highlightDip,
    active: activeDip,
    style: [
      "rotate-[-20deg] w-[26px] h-[24px] translate-x-[-82px] translate-y-[-95px]  400:w-[30px] 400:h-[25px] 400:translate-x-[-120px] 400:translate-y-[-130px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-150px] 500:translate-y-[-158px]   rounded-full",
      "rotate-[-20deg] w-[26px] h-[24px]  translate-x-[-55px] translate-y-[-125px]   400:w-[30px] 400:h-[25px] 400:translate-x-[-70px] 400:translate-y-[-180px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-90px] 500:translate-y-[-220px]  rounded-full",
      "w-[26px] h-[23px] translate-x-[-20px] translate-y-[-140px]    400:w-[27px] 400:h-[20px] 400:translate-x-[-26px] 400:translate-y-[-195px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-34px] 500:translate-y-[-245px]   rounded-full",
      "rotate-[5deg] w-[26px] h-[23px] translate-x-[15px] translate-y-[-130px]  400:w-[27px] 400:h-[20px] 400:translate-x-[19px] 400:translate-y-[-185px]  500:w-[35px] 500:h-[25px] 500:translate-x-[24px] 500:translate-y-[-230px]   rounded-full",
    ],
  },
  {
    name: "pip",
    highlight: highlightPip,
    active: activePip,
    style: [
      "rotate-[-20deg] w-[26px] h-[24px] translate-x-[-75px] translate-y-[-70px]  400:w-[30px] 400:h-[25px] 400:translate-x-[-110px] 400:translate-y-[-95px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-135px] 500:translate-y-[-110px]  rounded-full",
      "rotate-[-20deg] w-[26px] h-[24px] translate-x-[-55px] translate-y-[-98px]   400:w-[30px] 400:h-[25px] 400:translate-x-[-66px] 400:translate-y-[-130px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-85px] 500:translate-y-[-158px]  rounded-full",
      "w-[26px] h-[23px] translate-x-[-20px] translate-y-[-98px]   400:w-[30px] 400:h-[25px] 400:translate-x-[-25px] 400:translate-y-[-142px]  500:w-[35px] 500:h-[25px] 500:translate-x-[-30px] 500:translate-y-[-180px]  rounded-full",
      "rotate-[5deg] w-[26px] h-[23px] translate-x-[15px] translate-y-[-98px]  400:w-[29px] 400:h-[23px] 400:translate-x-[19px] 400:translate-y-[-140px]  500:w-[35px] 500:h-[25px] 500:translate-x-[25px] 500:translate-y-[-170px] rounded-full",
      "rotate-[25deg] w-[26px] h-[23px] translate-x-[65px] translate-y-[-39px]   400:w-[29px] 400:h-[23px] 400:translate-x-[105px] 400:translate-y-[-47px]  500:w-[35px] 500:h-[25px] 500:translate-x-[130px] 500:translate-y-[-56px]   rounded-full",
    ],
  },
  {
    name: "mcp",
    highlight: highlightMcp,
    active: activeMcp,
    style: [
      "rotate-[-20deg] w-[30px] h-[24px] translate-x-[-70px] translate-y-[-39px]  400:w-[36px] 400:h-[32px] 400:translate-x-[-90px] 400:translate-y-[-47px]  500:w-[47px] 500:h-[32px] 500:translate-x-[-114px] 500:translate-y-[-56px]   rounded-full",
      "rotate-[-20deg] w-[26px] h-[24px] translate-x-[-40px] translate-y-[-45px]  400:w-[36px] 400:h-[32px] 400:translate-x-[-58px] 400:translate-y-[-64px]  500:w-[47px] 500:h-[32px] 500:translate-x-[-72px] 500:translate-y-[-77px]  rounded-full",
      "w-[26px] h-[23px] translate-x-[-17px] translate-y-[-50px]  400:w-[39px] 400:h-[32px] 400:translate-x-[-23px] 400:translate-y-[-72px]  500:w-[47px] 500:h-[32px] 500:translate-x-[-30px] 500:translate-y-[-90px]   rounded-full",
      "rotate-[5deg] w-[26px] h-[23px] translate-x-[10px] translate-y-[-50px]  400:w-[39px] 400:h-[32px] 400:translate-x-[13px] 400:translate-y-[-70px]  500:w-[47px] 500:h-[32px] 500:translate-x-[13px] 500:translate-y-[-90px]  rounded-full",
      "rotate-[25deg] w-[26px] h-[23px] translate-x-[45px] translate-y-[2px]  400:w-[39px] 400:h-[32px] 400:translate-x-[60px] 400:translate-y-[2px]  500:w-[47px] 500:h-[32px] 500:translate-x-[80px] 500:translate-y-[9px]  rounded-full",
    ],
  },
  {
    name: "other",
    highlight: highlightOther,
    active: null,
    style: [
      "w-[200px] h-[31px] translate-x-[-54%] translate-y-[132px] 400:w-[280px] 400:h-[47px] 400:translate-x-[-52%] 400:translate-y-[190px] 500:w-[340px] 500:h-[55px] 500:translate-x-[-52%] 500:translate-y-[235px]   rounded-full",
    ],
  },
];
