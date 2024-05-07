export const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/trikiet.le.16",
    blank: true,
  },
  {
    title: "Gmail",
    href: "mailto:boyld222@gmail.com",
    blank: false,
  },
  {
    title: "Github",
    href: "https://github.com/boyld222",
    blank: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kietletri",
    blank: true,
  },
];

export interface RouteType {
  title: string;
  href: string;
  blank?: boolean;
}
