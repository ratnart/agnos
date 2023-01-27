import highlightEpigastrium from "../assets/epigastrium-highlight.png";
import highlightLuq from "../assets/luq-highlight.png";
import highlightLlq from "../assets/llq-highlight.png";
import highlightSuprapublic from "../assets/suprapubic-highlight.png";
import highlightRlq from "../assets/rlq-highlight.png";
import highlightRuq from "../assets/ruq-highlight.png";
import highlightUmbilicus from "../assets/umbilicus-highlight.png";
import highlightAllOver from "../assets/all-over-highlight.png";

import activeEpigastrium from "../assets/epigastrium-active.png";
import activeLuq from "../assets/luq-active.png";
import activeLlq from "../assets/llq-active.png";
import activeSuprapubic from "../assets/suprapubic-active.png";
import activeRlq from "../assets/rlq-active.png";
import activeRuq from "../assets/ruq-active.png";
import activeUmbilicus from "../assets/umbilicus-active.png";

export const stomach = [
  {
    name: "epigastrium",
    highlight: highlightEpigastrium,
    active: activeEpigastrium,
    style: [
      "w-[34px] h-[37px] translate-x-[-21px] translate-y-[-50px] 400:w-[50px] 400:h-[50px] 400:translate-x-[-31px] 400:translate-y-[-70px] 500:w-[54px] 500:h-[60px] 500:translate-x-[-36px] 500:translate-y-[-85px]  normal:w-[65px] normal:h-[80px] normal:translate-x-[-43px] normal:translate-y-[-105px] rounded-full",
    ],
  },
  {
    name: "luq",
    highlight: highlightLuq,
    active: activeLuq,
    style: [
      "w-[30px] h-[34px] translate-x-[7px] translate-y-[-25px] 400:w-[50px] 400:h-[50px] 400:translate-x-[7px] 400:translate-y-[-38px] 500:w-[50px] 500:h-[60px] 500:translate-x-[15px] 500:translate-y-[-45px]   rounded-full",
    ],
  },
  {
    name: "llq",
    highlight: highlightLlq,
    active: activeLlq,
    style: [
      "w-[35px] h-[36px] translate-x-[7px] translate-y-[10px] 400:w-[50px] 400:h-[50px] 400:translate-x-[7px] 400:translate-y-[14px] 500:w-[55px] 500:h-[60px] 500:translate-x-[15px] 500:translate-y-[19px]   rounded-full",
    ],
  },

  {
    name: "suprapubic",
    highlight: highlightSuprapublic,
    active: activeSuprapubic,
    style: [
    "w-[30px] h-[38px] translate-x-[-19px] translate-y-[26px] 400:w-[50px] 400:h-[50px] 400:translate-x-[-31px] 400:translate-y-[40px] 500:w-[55px] 500:h-[60px] 500:translate-x-[-35px] 500:translate-y-[50px]   rounded-full",
    ],
  },
  {
    name: "rlq",
    highlight: highlightRlq,
    active: activeRlq,
    style: [
      "w-[37px] h-[38px] translate-x-[-53px] translate-y-[10px] 400:w-[50px] 400:h-[50px] 400:translate-x-[-75px] 400:translate-y-[14px] 500:w-[60px] 500:h-[55px] 500:translate-x-[-90px] 500:translate-y-[25px]  rounded-full",
    ],
  },
  {
    name: "ruq",
    highlight: highlightRuq,
    active: activeRuq,
    style: [
      "w-[35px] h-[30px] translate-x-[-50px] translate-y-[-24px] 400:w-[50px] 400:h-[50px] 400:translate-x-[-70px] 400:translate-y-[-38px] 500:w-[50px] 500:h-[60px] 500:translate-x-[-85px] 500:translate-y-[-48px]   rounded-full",
    ],
  },
  {
    name: "umbilicus",
    highlight: highlightUmbilicus,
    active: activeUmbilicus,
    style: [
      "w-[30px] h-[30px] translate-x-[-19px] translate-y-[-7px] 400:w-[38px] 400:h-[38px] 400:translate-x-[-25px] 400:translate-y-[-7px] 500:w-[47px] 500:h-[47px] 500:translate-x-[-32px] 500:translate-y-[-7px]   rounded-full",
    ],
  },
  {
    name: "allOver",
    highlight: highlightAllOver,
    active: null,
    style: [
      "w-[90px] h-[33px] translate-x-[-59%] translate-y-[122px] 400:w-[135px] 400:h-[47px] 400:translate-x-[-57%] 400:translate-y-[168px] 500:w-[170px] 500:h-[55px] 500:translate-x-[-57%] 500:translate-y-[220px]   rounded-full",
    ],
  },
];
