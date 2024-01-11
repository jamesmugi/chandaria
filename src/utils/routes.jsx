import About from "../page/About";
import AboutContentView from "../page/AboutContentView";
import Contact from "../page/Contact";
import Gallery from "../page/Gallery";
import GalleryView from "../page/GalleryView";
import Home from "../page/Home";
import HomeContentView from "../page/HomeContentView";
import Innovations from "../page/Innovations";
import InnovationsView from "../page/InnovationsView";
import Partners from "../page/Partners";
import PartnersView from "../page/PartnersView";
import Projects from "../page/Projects";
import ProjectsView from "../page/ProjectsView";
import Services from "../page/Services";
import ServicesView from "../page/ServicesView";
import TeamView from "../page/TeamView";
import Error404 from "../page/errors/Error404";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/what-we-offer/:path",
    element: HomeContentView,
  },
  {
    path: "/what-we-offer/:path/:category",
    element: HomeContentView,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/about/content/:path",
    element: AboutContentView,
  },
  {
    path: "/about/:team",
    element: About,
  },
  {
    path: "/about/:team/:person",
    element: TeamView,
  },
  {
    path: "/about/tabs/:content",
    element: About,
  },
  {
    path: "/services",
    element: Services,
  },
  {
    path: "/services/tabs/:tab",
    element: Services,
  },
  {
    path: "/services/:path",
    element: ServicesView,
  },
  {
    path: "/innovations",
    element: Innovations,
  },
  {
    path: "/innovations/tabs/:category",
    element: Innovations,
  },
  {
    path: "/innovations/:path",
    element: InnovationsView,
  },
  {
    path: "/projects",
    element: Projects,
  },
  {
    path: "/projects/:path",
    element: ProjectsView,
  },
  {
    path: "/media",
    element: Gallery,
  },
  {
    path: "/media/:category",
    element: Gallery,
  },
  {
    path: "/media/newsletter/:newsletter",
    element: GalleryView,
  },
  {
    path: "/partners",
    element: Partners,
  },
  {
    path: "/partners/:path",
    element: PartnersView,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "*",
    element: Error404,
  },
];
