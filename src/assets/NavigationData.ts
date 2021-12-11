export interface ObjProps {
  key: string;
  title: string;
  ko_title: string;
}
export interface NavProps {
  key: number;
  title: string;
  ko_title: string;
  subMenu: Array<ObjProps>;
}

export const NavigationData: NavProps[] = [
  {
    key: 0,
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
        ko_title: "사업개요",
      },
      {
        key: "intro-history",
        title: "history",
        ko_title: "연혁",
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
    ],
  },
  {
    key: 1,
    title: "basic",
    ko_title: "SW기초교육",
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
        key: "basic-lecture",
        title: "basic-lecture",
        ko_title: "ST@R EDX 공개강좌",
      },
      {
        key: "basic-clinic",
        title: "basic-clinic",
        ko_title: "SW클리닉",
      },
      {
        key: "basic-tutoring",
        title: "basic-tutoring",
        ko_title: "SW튜터링",
      },
      {
        key: "basic-AI",
        title: "basic-AI",
        ko_title: "AI SW 서포터즈 맨토링",
      },
      {
        key: "basic-online",
        title: "basic-online",
        ko_title: "개방형 온라인 플랫폼(K-MOOC)",
      },
    ],
  },
  {
    key: 2,
    title: "major",
    ko_title: "SW전공교육",
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
        key: "major-certification",
        title: "major-certification",
        ko_title: "소프트웨어 전문역량 인증제",
      },
      {
        key: "major-contest",
        title: "major-contest",
        ko_title: "SW 경진대회",
      },
      {
        key: "major-training",
        title: "major-training",
        ko_title: "해외현장실습",
      },
      {
        key: "major-contest",
        title: "major-contest",
        ko_title: "SW경진대회",
      },
      {
        key: "major-training",
        title: "major-training",
        ko_title: "현장실습 해외교육",
      },
      {
        key: "major-certification",
        title: "major-certification",
        ko_title: "SW전문 역량인증 제도",
      },
      {
        key: "major-taprogram",
        title: "major-taprogram",
        ko_title: "프로그래밍교과목 멘토(TA) 프로그램",
      },
    ],
  },
  {
    key: 3,
    title: "integration",
    ko_title: "SW융합교육",
    subMenu: [
      {
        key: "integration-overview",
        title: "integration-overview",
        ko_title: "개요",
      },
      {
        key: "integration-software",
        title: "integration-software",
        ko_title: "소프트웨어 융합경영전공",
      },
      {
        key: "integration-product",
        title: "integration-product",
        ko_title: "스마트제조 IOT융합전공",
      },
      {
        key: "integration-content",
        title: "integration-content",
        ko_title: "스마트콘텐츠 융합전공",
      },
      {
        key: "integration-automobile",
        title: "integration-automobile",
        ko_title: "미래자동차 융합전공",
      },
      {
        key: "integration-inteligence",
        title: "integration-inteligence",
        ko_title: "지능형 전장 제어 전공",
      },
    ],
  },
  {
    key: 4,
    title: "value",
    ko_title: "SW가치확산",
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
      {
        key: "value-platform",
        title: "value-platform",
        ko_title: "SW 가치확산 플랫폼",
      },
    ],
  },
  {
    key: 5,
    title: "cooperation",
    ko_title: "SW산학협력",
    subMenu: [
      {
        key: "cooperation-overview",
        title: "cooperation-overview",
        ko_title: "개요",
      },
      {
        key: "cooperation-network",
        title: "cooperation-network",
        ko_title: "국내 · 외 기관과의 네트워크",
      },
      {
        key: "cooperation-project",
        title: "cooperation-project",
        ko_title: "국내 · 외 기관과의 프로젝트",
      },
      {
        key: "cooperation-internship",
        title: "cooperation-internship",
        ko_title: "국내 · 외 기관과의 연계 인턴쉽",
      },
    ],
  },
  {
    key: 6,
    title: "achievement",
    ko_title: "사업성과",
    subMenu: [
      {
        key: "acheivement-news",
        title: "acheivement-news",
        ko_title: "사업단 소식",
      },
      {
        key: "acheivement-aidnew",
        title: "acheivement-aidnew",
        ko_title: "SW교육지원 소식",
      },
      {
        key: "acheivement-valuenews",
        title: "acheivement-valuenews",
        ko_title: "SW가치확산 소식",
      },
      {
        key: "acheivement-coopnews",
        title: "acheivement-coopnews",
        ko_title: "SW산학협력소식",
      },
      {
        key: "acheivement-startup",
        title: "acheivement-startup",
        ko_title: "창업지원 소식",
      },
    ],
  },
  {
    key: 7,
    title: "community",
    ko_title: "알림마당",
    subMenu: [
      {
        key: "community-notice",
        title: "community-notice",
        ko_title: "공지사항",
      },
      {
        key: "community-administration",
        title: "community-administration",
        ko_title: "학사공지",
      },
      {
        key: "community-storaoge",
        title: "community-storage",
        ko_title: "서식자료실",
      },
      {
        key: "community-request",
        title: "community-request",
        ko_title: "건의사항",
      },
      {
        key: "community-help",
        title: "community-help",
        ko_title: "헬프데스크",
      },
      {
        key: "community-sitemap",
        title: "community-sitemap",
        ko_title: "사이트맵",
      },
    ],
  },

  {
    key: 8,
    title: "site-link",
    ko_title: "사이트링크",
    subMenu: [
      {
        key: "site-link",
        title: "link",
        ko_title: "링크관리",
      },
    ],
  },
];
