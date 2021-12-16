export const ConvertTitle = (subparam: string): string => {
  switch (subparam) {
    case "achievement-news":
      return "사업단 소식";
    case "achievement-aidnews":
      return "SW교육지원센터 소식";
    case "achievement-valuenews":
      return "SW가치확산센터 소식";
    case "achievement-coopnews":
      return "SW산학협력소식";
    case "achievement-startup":
      return "창업지원소식";
    case "community-notice":
      return "공지사항";
    case "community-administration":
      return "학사공지";
    case "community-storaoge":
      return "서식자료실";
    case "community-request":
      return "건의사항";
    case "community-help":
      return "헬프데스크";
    case "community-sitemap":
      return "사이트맵";
    default:
      return "NULL";
  }
};
