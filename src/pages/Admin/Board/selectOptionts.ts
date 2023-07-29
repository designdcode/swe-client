interface OptionProps {
  label: string;
  value: string;
}

export const optionEducate: Array<OptionProps> = [
  {
    label: "SW기초교육",
    value: "basic",
  },
  {
    label: "SW전공교육",
    value: "major",
  },
  {
    label: "SW융합교육",
    value: "convergence",
  },
];

export const optionValue: Array<OptionProps> = [
  {
    label: "수요중심",
    value: "edu",
  },
  {
    label: "선도자 양성",
    value: "training",
  },
  {
    label: "가치공유",
    value: "share",
  },
];

export const optionCooperate: Array<OptionProps> = [
  {
    label: "기관 네트워크",
    value: "network",
  },
  {
    label: "기관 프로젝트",
    value: "project",
  },
  {
    label: "기관 인턴쉽",
    value: "internship",
  },
];
