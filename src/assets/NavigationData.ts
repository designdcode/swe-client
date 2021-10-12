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
    ],
  },
  {
    key: 1,
    title: "basic",
    ko_title: "SW교육지원",
    subMenu: [
      {
        key: "basic-prepare",
        title: "prepare",
        ko_title: "입학 전 SW교육",
      },
      {
        key: "basic-type",
        title: "education",
        ko_title: "전공별 SW기초교육",
      },
      {
        key: "basic-creative",
        title: "creative",
        ko_title: "SW창의교육과정",
      },
      {
        key: "basic-mobile",
        title: "mobile",
        ko_title: "Mobile 콘텐츠 연계 과정",
      },
      {
        key: "basic-embedded",
        title: "embedded",
        ko_title: "IoT 임베디드 연계과정",
      },
      {
        key: "basic-convergence",
        title: "convergence",
        ko_title: "SW융합 전공교육",
      },
      {
        key: "basic-certification",
        title: "certification",
        ko_title: "SW융합 역량인증제도",
      },
    ],
  },
  {
    key: 2,
    title: "major",
    ko_title: "SW전공교육",
    subMenu: [
      {
        key: "major-base",
        title: "base",
        ko_title: "SW전공기초 교육과정",
      },
      {
        key: "major-core",
        title: "core",
        ko_title: "SW전공핵심 교욱과정",
      },
      {
        key: "major-advance",
        title: "advance",
        ko_title: "SW전공심화 교육과정",
      },
      {
        key: "major-application",
        title: "application",
        ko_title: "SW응용심화 교육과정",
      },
      {
        key: "major-project",
        title: "project",
        ko_title: "프로젝트 기반 교육과정",
      },
      {
        key: "major-communication",
        title: "communication",
        ko_title: "소통 및 인성함양 교육",
      },
      {
        key: "major-opensource",
        title: "opensource",
        ko_title: "오픈소스 SW활용 운영",
      },
      {
        key: "major-contest",
        title: "contest",
        ko_title: "SW 경진대회",
      },
      {
        key: "major-training",
        title: "training",
        ko_title: "현장실습 해외교육",
      },
      {
        key: "major-certification",
        title: "certification",
        ko_title: "SW전문 역량인증 제도",
      },
    ],
  },
  {
    key: 3,
    title: "education",
    ko_title: "SW융합교육",
    subMenu: [
      {
        key: "education-management",
        title: "management",
        ko_title: "SW 융합경영전공",
      },
      {
        key: "education-smart",
        title: "smart",
        ko_title: "스마트제조 IoT융합전공",
      },
      {
        key: "education-content",
        title: "content",
        ko_title: "스마트콘텐츠 융합전공",
      },
    ],
  },
  {
    key: 4,
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
    ],
  },
  {
    key: 5,
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
        key: "press-cooperation",
        title: "news-cooperation",
        ko_title: "SW산학협력 소식",
      },
      {
        key: "press-startup",
        title: "startup",
        ko_title: "창업지원소식",
      },
      {
        key: "press-onpress",
        title: "news-press",
        ko_title: "보도자료",
      },
    ],
  },
  {
    key: 6,
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
      {
        key: "community-sitemap",
        title: "sitemap",
        ko_title: "사이트맵",
      },
    ],
  },
  {
    key: 7,
    title: "sitelink",
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
