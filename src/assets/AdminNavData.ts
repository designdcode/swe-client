export interface ObjProps {
  key: string;
  title: string;
  ko_title: string;
  isList?: boolean;
}
export interface NavProps {
  title: string;
  ko_title: string;
  subMenu: Array<ObjProps>;
  description: string;
}

export const AdminNavData: NavProps[] = [
  {
    title: "intro",
    ko_title: "사업단 소개",
    description: "Introduction",
    subMenu: [
      {
        key: "intro-introduce",
        title: "intro-introduce",
        ko_title: "인사말",
      },
      {
        key: "intro-overview",
        title: "intro-overview",
        ko_title: "사업개요",
      },
      {
        key: "intro-history",
        title: "intro-history",
        ko_title: "연혁",
      },
      {
        key: "intro-task",
        title: "intro-task",
        ko_title: "조직도 및 업무",
        isList: true,
      },
      {
        key: "intro-route",
        title: "intro-route",
        ko_title: "오시는길",
      },
    ],
  },
  {
    title: "basic",
    ko_title: "SW기초교육",
    description: "SW Basic Education",
    subMenu: [
      {
        key: "basic-overview",
        title: "basic-overview",
        ko_title: "개요",
      },
      {
        key: "basic-pre",
        title: "basic-pre-education",
        ko_title: "입학전 SW교육",
      },
      {
        key: "basic-basicedu",
        title: "basic-education",
        ko_title: "SW기초교육",
      },
      {
        key: "basic-creativity",
        title: "basic-creativity",
        ko_title: "SW창의역량인증",
      },
      {
        key: "basic-AI",
        title: "basic-AI",
        ko_title: "AI SW서포터즈멘토링",
      },
      {
        key: "basic-online",
        title: "basic-online",
        ko_title: "개방형온라인플랫폼",
      },
    ],
  },
  {
    title: "major",
    ko_title: "SW전공교육",
    description: "SW Major Education",
    subMenu: [
      {
        key: "major-overview",
        title: "major-overview",
        ko_title: "개요",
      },
      {
        key: "major-project",
        title: "major-project",
        ko_title: "프로젝트 기반 교육과정",
      },
      {
        key: "major-sw",
        title: "major-sw",
        ko_title: "몰입형 SW교육과정",
      },
      {
        key: "major-opensource",
        title: "major-opensource",
        ko_title: "오픈소스 SW 교육",
      },
      {
        key: "major-verify",
        title: "major-verify",
        ko_title: "소프트웨어전문역량인증제",
      },
      {
        key: "major-training",
        title: "major-training",
        ko_title: "해외현장실습",
      },
      {
        key: "major-platform",
        title: "major-platform",
        ko_title: "SW역량강화플랫폼",
      },
    ],
  },
  {
    title: "integration",
    ko_title: "SW융합교육",
    description: "SW Convergence Education",
    subMenu: [
      {
        key: "integration-overview",
        title: "integration-overview",
        ko_title: "개요",
      },
      {
        key: "integration-swmajor",
        title: "integration-swmajor",
        ko_title: "SW연계/복수전공",
      },
    ],
  },
  {
    title: "value",
    ko_title: "SW가치확산",
    description: "SW Value Diffusion",
    subMenu: [
      {
        key: "value-overview",
        title: "value-overview",
        ko_title: "개요",
      },
      {
        key: "value-edu",
        title: "value-edu",
        ko_title: "수요중심 AI · SW 교육",
      },
      {
        key: "value-training",
        title: "value-training",
        ko_title: "AI · SW 선도자 양성",
      },
      {
        key: "value-share",
        title: "value-share",
        ko_title: "AI · SW 가치공유",
      },
    ],
  },
  {
    title: "cooperation",
    ko_title: "SW산학협력",
    description: "SW Industry University Cooperation",
    subMenu: [
      {
        key: "cooperation-overview",
        title: "cooperation-overview",
        ko_title: "개요",
      },
      {
        key: "cooperation-network",
        title: "cooperation-network",
        ko_title: "국내·외 기관과의네트워크",
      },
      {
        key: "cooperation-project",
        title: "cooperation-project",
        ko_title: "국내·외 기관과의프로젝트",
      },
      {
        key: "cooperation-internship",
        title: "cooperation-internship",
        ko_title: "국내·외 기관과연계인턴쉽",
      },
    ],
  },
  {
    title: "achievement",
    ko_title: "사업성과",
    description: "Business Performance",
    subMenu: [
      {
        key: "achievement-news",
        title: "achievement-news",
        ko_title: "사업단 소식",
        isList: true,
      },
      {
        key: "achievement-aidnews",
        title: "achievement-aidnews",
        ko_title: "SW교육지원센터 소식",
        isList: true,
      },
      {
        key: "achievement-valuenews",
        title: "achievement-valuenews",
        ko_title: "SW가치확산센터 소식",
        isList: true,
      },
      {
        key: "achievement-coopnews",
        title: "achievement-coopnews",
        ko_title: "SW산학협력소식",
        isList: true,
      },
      {
        key: "achievement-startup",
        title: "achievement-startup",
        ko_title: "창업지원 소식",
        isList: true,
      },
    ],
  },
  {
    title: "community",
    ko_title: "알림마당",
    description: "Community",
    subMenu: [
      {
        key: "community-notice",
        title: "community-notice",
        ko_title: "공지사항",
        isList: true,
      },
      {
        key: "community-administration",
        title: "community-administration",
        ko_title: "학사공지",
        isList: true,
      },
      {
        key: "community-storage",
        title: "community-storage",
        ko_title: "서식자료실",
        isList: true,
      },
      {
        key: "community-request",
        title: "community-request",
        ko_title: "건의사항",
        isList: true,
      },
      {
        key: "community-help",
        title: "community-help",
        ko_title: "헬프데스크",
        isList: true,
      },
      {
        key: "community-sitemap",
        title: "community-sitemap",
        ko_title: "사이트맵",
      },
    ],
  },
  {
    title: "sitelink",
    ko_title: "사이트링크",
    description: "Site-Link",
    subMenu: [
      {
        key: "site-cs",
        title: "site-cs",
        ko_title: "컴퓨터공학부",
      },
      {
        key: "site-ai",
        title: "site-ai",
        ko_title: "AI소프트웨어학과",
      },
      {
        key: "site-convergence",
        title: "site-convergence",
        ko_title: "SW융합학부",
      },
      {
        key: "site-it",
        title: "site-it",
        ko_title: "IT교육학부",
      },
      {
        key: "site-smartcar",
        title: "site-smartcar",
        ko_title: "스마트자동차공학부",
      },
      {
        key: "site-sw",
        title: "site-sw",
        ko_title: "SW융합교육원",
      },
    ],
  },
];
