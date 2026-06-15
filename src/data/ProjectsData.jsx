import SaaSPreview from '../components/Project';
import Screenshot from "../assets/Screenshot 2026-03-30 113327.png";
import Saasscreenshot from "../assets/Screenshot 2026-04-17 194532.png"
import ndf from "../assets/ndf.png"
export const Projects = [
  {
    id: "01",
    category: "LIVE CLIENT PROJECT",
    title: "NDF BD CTG - FULL COMMUNITY PLATFORM",
    description:
       "End-to-end platform for Bangladesh's largest debate community — public site, admin dashboard, member portal, blog, events calendar, gallery and a searchable hall of records. Security-hardened, optimized to a perfect Lighthouse score, and live in production today.",
    stack: "React • Supabase • Cloudflare Workers",
    delivery: "5 days",
    link: "https://www.ndfbdctg.org/",
    preview: <SaaSPreview screenshot={ndf} />,
    
  },
  {
     id: "02",
    category: "SAAS ANALYTICS",
    title: "SaasDash — SaaS Metrics Dashboard",
    description:
      "A live SaaS metrics dashboard connected to Google Sheets. Founders track MRR, ARR, active customers and churn rate in one view — with revenue trends and raw metrics updating in real time.",
    stack: "Next.js • Google Sheets API • Recharts",
    delivery: "6 days",
    link: "https://saasdash-t7lm.vercel.app/",
    preview: <SaaSPreview screenshot={Saasscreenshot} />,
  },
  {
    id: "03",
    category: "OPERATIONS",
    title: "Inventory & Delivery Tracking Dashboard",
    description:
      "Live operations view connected to Google Sheets. Team sees stock levels, pending orders and delivery status without a single phone call.",
    stack: "React • Google Sheets API • Recharts",
    delivery: "4 days",
    preview: <SaaSPreview />,
  },
];
