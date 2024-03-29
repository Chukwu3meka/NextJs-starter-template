import Link from "next/link";
import MenuContainer from "./mobile-menu";
import styles from "./styles.module.scss";
import SocialContainer from "../../shared/social/SocialContainer";
import { Button, IconButton, Stack, Typography, Box } from "@mui/material";
import { Login as LoginIcon, Logout as LogOutIcon, LightMode as LightIcon, DarkModeOutlined as DarkIcon } from "@mui/icons-material";

import { HeaderProps } from "interfaces/components/layouts.interface";

const Header = ({ className, authenticated, swapColorFn, color, theme, themeHandler, visible, profile }: HeaderProps) => (
  <header id="header" className={styles[className]}>
    <main>
      <IconButton aria-label="theme" onClick={themeHandler}>
        {theme === "light" ? <DarkIcon color="primary" /> : <LightIcon color="primary" />}
      </IconButton>
      <Box>
        <Stack direction="row" onMouseOver={() => swapColorFn()} onMouseLeave={() => swapColorFn()}>
          <Link href="/">
            <Typography fontWeight={700} fontSize="1.7em" component="span" color={color.first}>
              Next.js
            </Typography>
            &nbsp;
            <Typography fontWeight={700} fontSize="1.7em" component="span" color={color.last}>
              Template
            </Typography>
          </Link>
        </Stack>
      </Box>

      <Box display={visible.nav ? "flex" : "none"}>
        {navLinks.map(({ title, path }) => (
          <Typography variant="subtitle2" key={title} color="primary" fontWeight={700}>
            <Link href={path}>{title}</Link>
          </Typography>
        ))}
      </Box>

      {visible.mobile ? (
        <MenuContainer profile={profile} authenticated={authenticated} />
      ) : (
        <Box display="flex">
          <SocialContainer filterParams={["twitter", "instagram", "whatsapp"]} />

          <Box>
            {!authenticated && (
              <Link href="/accounts/signin">
                <Button variant="contained" color="primary" startIcon={<LoginIcon />}>
                  Sign in
                </Button>
              </Link>
            )}

            {authenticated && (
              <a href={`${process.env.API_URL}/accounts/signout`} rel="noopener noreferrer">
                <Button variant="outlined" startIcon={<LogOutIcon />}>
                  Sign out
                </Button>
              </a>
            )}
          </Box>
        </Box>
      )}
    </main>
  </header>
);

export default Header;

const navLinks = [
  { title: "Home", path: "/" },
  { title: "API Hub", path: "/apihub" },
  { title: "Manager", path: "/manager" },
];
