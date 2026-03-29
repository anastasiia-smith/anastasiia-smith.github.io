import airbnbCover from './assets/projects/airbnb/airbnb.png';
import memeCover from './assets/projects/meme/meme.png';
import volnaHome from './assets/projects/volna/home-page.png';
import volnaSlider from './assets/projects/volna/home-page-slider.png';
import volnaAbout from './assets/projects/volna/about-page.png';
import volnaContacts from './assets/projects/volna/contacts-page.png';
import volnaService from './assets/projects/volna/service-page.png';
import volnaMusic from './assets/projects/volna/music-page.png';
import volnaHow from './assets/projects/volna/how-it-works-page.png';
import tenziesCover from './assets/projects/tenzies/tenzies.png';
import mitMap from './assets/projects/mit/map-view.png';
import mitRunResults from './assets/projects/mit/run-project-results.png';
import mitRunResultsChange from './assets/projects/mit/run-project-results-change.png';
import mitRun from './assets/projects/mit/run-project.png';
import mitResults from './assets/projects/mit/MIT-results.png';
import mitLab from './assets/projects/mit/map-view-lab-preview.png';
import mitPopup from './assets/projects/mit/popup.png';
import mitCustomize from './assets/projects/mit/customize-popover.png';
import mitDetails from './assets/projects/mit/details-page.png';
import mitFilter from './assets/projects/mit/map-view-filter.png';
import mitList from './assets/projects/mit/list-view.png';
import analyticsExplore from './assets/projects/analytics/explore-page.png';
import analyticsQuality2 from './assets/projects/analytics/quality-page-2.png';
import analyticsAnnotate from './assets/projects/analytics/annotate-page.png';
import analyticsQuality1 from './assets/projects/analytics/quality-page-1.png';
import analyticsResults from './assets/projects/analytics/results-page.png';
import analyticsConfigure from './assets/projects/analytics/configure-page.png';

const PROJECTS = [
  {
    id: 'airbnb',
    title: 'Airbnb experience UI',
    summary: 'Landing and listing exploration focused on layout, imagery, and responsive detail.',
    cover: airbnbCover,
    gallery: [],
    links: { live: '', repo: '' },
  },
  {
    id: 'meme',
    title: 'Meme generator',
    summary: 'Interactive editor for building shareable memes with text and templates.',
    cover: memeCover,
    gallery: [],
    links: { live: '', repo: '' },
  },
  {
    id: 'volna',
    title: 'Volna — multi-page site',
    summary: 'Marketing site with home, services, music, and contact flows.',
    cover: volnaHome,
    gallery: [
      { src: volnaHome, alt: 'Volna home page' },
      { src: volnaSlider, alt: 'Volna home slider' },
      { src: volnaAbout, alt: 'Volna about page' },
      { src: volnaContacts, alt: 'Volna contacts' },
      { src: volnaService, alt: 'Volna service page' },
      { src: volnaMusic, alt: 'Volna music page' },
      { src: volnaHow, alt: 'Volna how it works' },
    ],
    links: { live: '', repo: '' },
  },
  {
    id: 'tenzies',
    title: 'Tenzies game',
    summary: 'Dice-matching game with roll logic, win state, and tight UI feedback.',
    cover: tenziesCover,
    gallery: [],
    links: { live: '', repo: '' },
  },
  {
    id: 'mit',
    title: 'MIT project workspace',
    summary: 'Map and list views for exploring runs, filters, labs, and detailed results.',
    cover: mitMap,
    gallery: [
      { src: mitMap, alt: 'Map view' },
      { src: mitList, alt: 'List view' },
      { src: mitFilter, alt: 'Map with filters' },
      { src: mitLab, alt: 'Lab preview on map' },
      { src: mitRun, alt: 'Run project' },
      { src: mitRunResults, alt: 'Run results' },
      { src: mitRunResultsChange, alt: 'Run results comparison' },
      { src: mitResults, alt: 'MIT results overview' },
      { src: mitDetails, alt: 'Details page' },
      { src: mitPopup, alt: 'Popup' },
      { src: mitCustomize, alt: 'Customize popover' },
    ],
    links: { live: '', repo: '' },
  },
  {
    id: 'analytics',
    title: 'Analytics dashboard',
    summary: 'Explore, configure, annotate, and review quality metrics across datasets.',
    cover: analyticsExplore,
    gallery: [
      { src: analyticsExplore, alt: 'Explore page' },
      { src: analyticsConfigure, alt: 'Configure page' },
      { src: analyticsAnnotate, alt: 'Annotate page' },
      { src: analyticsResults, alt: 'Results page' },
      { src: analyticsQuality1, alt: 'Quality page' },
      { src: analyticsQuality2, alt: 'Quality page detail' },
    ],
    links: { live: '', repo: '' },
  },
];

function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}

export { PROJECTS, getProjectById };
