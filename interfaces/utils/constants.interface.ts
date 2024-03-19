export interface SocialAccounts {
  title:
    | "Facebook"
    | "Twitter"
    | "Instagram"
    | "LinkedIn"
    | "SoccerMASS"
    | "Pinterest"
    | "Github"
    | "YouTube"
    | "Fiverr"
    | "Whatsapp"
    | "Phone";
  id: string;
  image: string;
  href: string;
}

export interface InfoLinks {
  label: string;
  path: string;
}
