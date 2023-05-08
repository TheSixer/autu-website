import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Handyman from '@mui/icons-material/Handyman';
import LiveTv from '@mui/icons-material/LiveTv';
import Newspaper from '@mui/icons-material/Newspaper';
import Info from '@mui/icons-material/Info';
import Storefront from '@mui/icons-material/Storefront';
import Translate from '@mui/icons-material/Translate';
import { useIntl } from "react-intl";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";

const SideMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  const { pathname, locale } = useRouter();
  const intl = useIntl();

  const home = intl.formatMessage({ id: "head.menu.home" });
  const tools = intl.formatMessage({ id: "head.menu.tools" });
  const market = intl.formatMessage({ id: "head.menu.market" });
  const live = intl.formatMessage({ id: "head.menu.live" });
  const news = intl.formatMessage({ id: "head.menu.news" });
  const about = intl.formatMessage({ id: "head.menu.about" });

  const navigate = (locale) => {
    window.location.href = `${window.location.origin}${locale === 'en' ? '/en' : ''}/${pathname}`;
  };

  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={props.toggleDrawer}
    >
      <List>
        <ListItem>
          <ListItemButton onClick={() => router.push('/')}>
            <ListItemIcon>
              <Home sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={home} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/market')}>
            <ListItemIcon>
              <Storefront sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={market} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/tools')}>
            <ListItemIcon>
              <Handyman sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={tools} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/promotion')}>
            <ListItemIcon>
              <LiveTv sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={live} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/news')}>
            <ListItemIcon>
              <Newspaper sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={news} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => router.push('/about')}>
            <ListItemIcon>
              <Info sx={{ color: 'black' }} />
            </ListItemIcon>
            <ListItemText primary={about} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Translate />
            </ListItemIcon>
            <ListItemText primary={locale === 'en' ? 'English' : '中文'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {router.locales.sort().map((locale) => (
          <MenuItem key={locale} onClick={() => navigate(locale)}>
            {locale === 'en' ? 'English' : '中文'}
          </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}

export default SideMenu;