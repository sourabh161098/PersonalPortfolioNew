import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiRedux,
  SiAngular,
  SiHtml5,
  SiCss,
  SiSass,
  SiStyledcomponents,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiJest,
  SiJasmine,
  SiD3,
  SiBootstrap,
  SiFigma,
  SiPostman,
  SiNpm,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNodedotjs,
  SiExpress,
  SiFlask,
} from 'react-icons/si'
import { FaAws, FaCloud, FaMicrosoft, FaTable } from 'react-icons/fa'

/**
 * Logo + brand color for every skill name used in `skillGroups`
 * (src/data/content.js). Keys must match those names exactly.
 * 'currentColor' is used for logos that are black/white by brand, so they
 * stay visible in both themes. A few skills have no logo in the icon set
 * (AgGridReact, Azure DevOps, Azure Containers, AWS EC2), so a close
 * stand-in is used.
 */
export const skillIcons = {
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
  React: { Icon: SiReact, color: '#61DAFB' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  Angular: { Icon: SiAngular, color: '#DD0031' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  'SASS/SCSS': { Icon: SiSass, color: '#CC6699' },
  'Styled-Components': { Icon: SiStyledcomponents, color: '#DB7093' },
  Webpack: { Icon: SiWebpack, color: '#8DD6F9' },
  Babel: { Icon: SiBabel, color: '#F9DC3E' },
  ESLint: { Icon: SiEslint, color: '#4B32C3' },
  Jest: { Icon: SiJest, color: '#C21325' },
  Jasmine: { Icon: SiJasmine, color: '#8A4182' },
  AgGridReact: { Icon: FaTable, color: '#F6821F' },
  'D3.js': { Icon: SiD3, color: '#F9A03C' },
  ReactStrap: { Icon: SiBootstrap, color: '#7952B3' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  NPM: { Icon: SiNpm, color: '#CB3837' },
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: 'currentColor' },
  GitLab: { Icon: SiGitlab, color: '#FC6D26' },
  'Azure DevOps': { Icon: FaMicrosoft, color: '#0078D7' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { Icon: SiExpress, color: 'currentColor' },
  'Python Flask': { Icon: SiFlask, color: 'currentColor' },
  'AWS EC2': { Icon: FaAws, color: '#FF9900' },
  'Azure Containers': { Icon: FaCloud, color: '#0078D7' },
}
