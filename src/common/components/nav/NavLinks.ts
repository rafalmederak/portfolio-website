import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';

export const navLinks = [
  {
    id: 1,
    icon: HomeOutlinedIcon,
    text: 'Home',
    path: 'home',
  },
  {
    id: 2,
    icon: PortraitIcon,
    text: 'About',
    path: 'about',
  },
  {
    id: 3,
    icon: LocalLibraryOutlinedIcon,
    text: 'My Skills',
    path: 'skills',
  },
  {
    id: 4,
    icon: PhotoAlbumOutlinedIcon,
    text: 'My Projects',
    path: 'projects',
  },
  {
    id: 5,
    icon: ContactsOutlinedIcon,
    text: 'Contact',
    path: 'contact',
  },
];
