export interface PhoneCode {
  code: string;
  country: string;
  flag: string;
  label: string;
}

export const phoneCodes: PhoneCode[] = [
  {
    code: "+33",
    country: "France",
    flag: "🇫🇷",
    label: "🇫🇷 +33"
  },
  {
    code: "+1",
    country: "United States",
    flag: "🇺🇸",
    label: "🇺🇸 +1"
  },
  {
    code: "+44",
    country: "United Kingdom",
    flag: "🇬🇧",
    label: "🇬🇧 +44"
  },
  {
    code: "+225",
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    label: "🇨🇮 +225"
  },
  {
    code: "+49",
    country: "Germany",
    flag: "🇩🇪",
    label: "🇩🇪 +49"
  },
  {
    code: "+39",
    country: "Italy",
    flag: "🇮🇹",
    label: "🇮🇹 +39"
  },
  {
    code: "+34",
    country: "Spain",
    flag: "🇪🇸",
    label: "🇪🇸 +34"
  },
  {
    code: "+32",
    country: "Belgium",
    flag: "🇧🇪",
    label: "🇧🇪 +32"
  },
  {
    code: "+41",
    country: "Switzerland",
    flag: "🇨🇭",
    label: "🇨🇭 +41"
  },
  {
    code: "+31",
    country: "Netherlands",
    flag: "🇳🇱",
    label: "🇳🇱 +31"
  }
];
