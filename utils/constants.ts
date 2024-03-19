import { Profile } from "interfaces/redux-store/account.interfaces";
import { SocialAccounts } from "interfaces/utils/constants.interface";

export const SOCIAL_ACCOUNTS: SocialAccounts[] = [
  { id: "linkedin", title: "LinkedIn", image: "/images/social/linkedin.png", href: "https://www.linkedin.com/in/chukwu3meka/" },
  { id: "instagram", title: "Instagram", image: "/images/social/instagram.png", href: "https://www.instagram.com/Chukwuemeka_Maduekwe" },
  { id: "twitter", title: "Twitter", image: "/images/social/twitter.png", href: "https://twitter.com/Chukwu3meka/" },
  { id: "github", title: "Github", image: "/images/social/github.png", href: "https://github.com/Chukwu3meka/SoccerMASS-Web/issues" },
  { id: "whatsapp", title: "Whatsapp", image: "/images/social/whatsapp.png", href: "https://wa.me/qr/5KYEVNBVLVVSI1" },
  { id: "phone", title: "Phone", image: "/images/social/phone.png", href: "tel:+234(706)-441-7213" },
  { id: "facebook", title: "Facebook", image: "/images/social/facebook.png", href: "https://web.facebook.com/Chukwu3meka" },
];

export const INIT_PROFILE: Profile = {
  role: "dummy", // <= Init role is always a dummy user
  theme: "dark",
  name: "Next.js Template",
  handle: "Sample ",
  avatar: "/images/layout/profile.webp",
};

export const HEADER_HEIGHT = 74;
