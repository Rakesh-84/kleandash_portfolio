import SaaSPreview from '../components/Project';
import Screenshot from "../assets/Screenshot 2026-03-30 113327.png";
import Saasscreenshot from "../assets/Screenshot 2026-04-17 194532.png"
export const Projects = [
  {
    id: "01",
    category: "SAAS ANALYTICS",
    title: "SaaS Revenue & Growth Dashboard",
    description:
      "A unified morning dashboard for SaaS founders — MRR, churn, signups and active users in one view. Connected to Supabase.",
    stack: "React • Recharts • JSON",
    delivery: "5 days",
    link: "https://biz-dash-pi.vercel.app/",
    preview: <SaaSPreview screenshot={Screenshot} />,
    
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
