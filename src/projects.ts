import urgentPrinters from '../images/urgent-printers.png';
import donate from '../images/donatedotin.jpg';
import gamehub from '../images/gamehub.jpg';
import expenses from '../images/expensetracker.jpg';
import amazon from '../images/amazonclone.jpg';
export type Project = {name:string;type:string;category:string;image?:string;description:string;url?:string;repo?:string;color:string;stack:string[];mark?:string};
const github='https://github.com/Arjunsharma-py';
export const projects:Project[]=[
 {name:'Urgent Printers',type:'Live printing storefront',category:'Web apps',image:urgentPrinters,description:'An online storefront for personalized wedding and celebration printing, with product collections, customization options, and occasion-based browsing.',url:'https://urgentprinters.com',color:'peach',stack:['E-commerce','Personalized printing']},
 {name:'PixelForge',type:'Desktop image toolkit',category:'Desktop tools',description:'Compress, resize, and convert images in a Python desktop app, with adjustable quality and aspect-ratio controls.',repo:`${github}/PixelForge`,color:'forge',stack:['Python','PySide6','Pillow'],mark:'PF'},
 {name:'TownVibe',type:'Local event discovery',category:'Web apps',description:'A home for local events, with event listings, individual detail pages, and information for getting in touch with organizers.',url:'https://arjunsharma-py.github.io/TownVibe/',repo:`${github}/TownVibe`,color:'town',stack:['HTML','CSS','JavaScript'],mark:'tv.'},
 {name:'E-commerce Admin',type:'Commerce dashboard',category:'Web apps',description:'A React admin panel for managing products, categories, orders, and users, with sales overviews and authenticated access.',repo:`${github}/ecommerce-admin`,color:'commerce',stack:['React','Tailwind CSS','Vite'],mark:'↗'},
 {name:'House Hotel',type:'Property & booking frontend',category:'Web apps',description:'A React and TypeScript frontend with property browsing, booking views, account pages, and an add-property flow.',url:'https://house-hotel-client.vercel.app',repo:`${github}/house-hotel-client`,color:'hotel',stack:['React','TypeScript','Vite'],mark:'hh.'},
 {name:'Donate.in',type:'Web application',category:'Web apps',image:donate,description:'A charity website for donating money or goods and applying to volunteer.',repo:`${github}/project2.0`,color:'peach',stack:['Web development']},
 {name:'Game Hub',type:'Discovery experience',category:'Web apps',image:gamehub,description:'A place to discover games, browse genres, and find your next adventure.',url:'https://game-hub-psi-ashy.vercel.app/',repo:`${github}/game-hub`,color:'lavender',stack:['React','TypeScript']},
 {name:'Expense Tracker',type:'Personal finance application',category:'Web apps',image:expenses,description:'Track expenses and income, with graphs that help put everyday finances in perspective.',url:'https://expense-tracker-client-theta.vercel.app/',repo:`${github}/Expense-Tracker-client`,color:'green',stack:['React','TypeScript']},
 {name:'Amazon UI Clone',type:'Interface study',category:'UI explorations',image:amazon,description:'Exploring the layout and visual details behind a familiar shopping experience.',color:'sand',stack:['HTML','CSS']},
];
export const categories=['All work',...new Set(projects.map(project=>project.category))];
