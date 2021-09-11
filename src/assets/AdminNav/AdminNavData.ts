export interface ObjProps {
  key: string;
  title: string;
  ko_title: string;
}
export interface NavProps {
  title: string;
  ko_title: string;
  subMenu: Array<ObjProps>;
}

export const AdminNavData: NavProps[] = [
  {
    title: "intro",
    ko_title: "사업단 소개",
    subMenu: [
      {
        key: "intro-introduce",
        title: "introduce",
        ko_title: "인사말",
      },
      {
        key: "intro-overview",
        title: "overview",
        ko_title: "사업개요 & 추진방향",
      },
      {
        key: "intro-history",
        title: "history",
        ko_title: "연혁",
      },
      {
        key: "intro-participants",
        title: "participants",
        ko_title: "참여기관",
      },
      {
        key: "intro-task",
        title: "task",
        ko_title: "조직도 및 업무",
      },
      {
        key: "intro-route",
        title: "route",
        ko_title: "오시는길",
      },
      {
        key: "intro-storage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
  {
    title: "value",
    ko_title: "SW가치확산",
    subMenu: [
      {
        key: "value-introduce",
        title: "introduce",
        ko_title: "소개",
      },
      {
        key: "value-edu",
        title: "edu",
        ko_title: "선문 Edu-Tech 프로그램",
      },
      {
        key: "value-glocal",
        title: "glocal",
        ko_title: "Glocal 융복합 프로그램",
      },
      {
        key: "value-cooperation",
        title: "local-cooperation",
        ko_title: "지역협력 프로그램",
      },
      {
        key: "value-information",
        title: "local-information",
        ko_title: "정보소외지역 프로그램",
      },
      {
        key: "value-development",
        title: "development",
        ko_title: "선문인 직무향상 프로그램",
      },
      {
        key: "value-value",
        title: "sw-value",
        ko_title: "SW가치확산 플랫폼",
      },
      {
        key: "value-stroage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
  {
    title: "edu",
    ko_title: "SW교육지원",
    subMenu: [
      {
        key: "edu-introduce",
        title: "introduce",
        ko_title: "소개",
      },
      {
        key: "edu-basic",
        title: "sw-basic",
        ko_title: "SW기초교육",
      },
      {
        key: "edu-major",
        title: "sw-major",
        ko_title: "SW전공교육",
      },
      {
        key: "edu-convergence",
        title: "sw-convergence",
        ko_title: "SW융합교육",
      },
      {
        key: "edu-platform",
        title: "sw-platform",
        ko_title: "SW역량강화 플랫폼",
      },
      {
        key: "edu-storage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
  {
    title: "cooperation",
    ko_title: "SW산학협력",
    subMenu: [
      {
        key: "cooperation-introduce",
        title: "introduce",
        ko_title: "소개",
      },
      {
        key: "cooperation-capstone",
        title: "capstone",
        ko_title: "기업연계 캡스톤",
      },
      {
        key: "cooperation-collaboration",
        title: "collaboration",
        ko_title: "산학공동프로젝트",
      },
      {
        key: "cooperation-training",
        title: "training",
        ko_title: "현장실습",
      },
      {
        key: "cooperation-education",
        title: "education",
        ko_title: "해외교육",
      },
      {
        key: "cooperation-storage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
  {
    title: "press",
    ko_title: "사업성과",
    subMenu: [
      {
        key: "press-main",
        title: "main",
        ko_title: "주요 사업 성과",
      },
      {
        key: "press-news",
        title: "news",
        ko_title: "사업단 소식",
      },
      {
        key: "press-swvalue-news",
        title: "news-value",
        ko_title: "SW가치확산 소식",
      },
      {
        key: "press-swedu-news",
        title: "news-edu",
        ko_title: "SW교육지원 소식",
      },
      {
        key: "press-startup",
        title: "news-startup",
        ko_title: "창업지원 소식",
      },
      {
        key: "press-onpress",
        title: "news-press",
        ko_title: "보도자료",
      },
      {
        key: "press-storage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
  {
    title: "community",
    ko_title: "알림마당",
    subMenu: [
      {
        key: "community-notice",
        title: "notice",
        ko_title: "공지사항",
      },
      {
        key: "community-admission",
        title: "admission",
        ko_title: "학사공지",
      },
      {
        key: "community-storage",
        title: "storage",
        ko_title: "자료실",
      },
    ],
  },
];
