import SaaSPreview from '../components/Project';

export const Projects = [
  {
    id: "01",
    category: "SAAS ANALYTICS",
    title: "SaaS Revenue & Growth Dashboard",
    description:
      "A unified morning dashboard for SaaS founders — MRR, churn, signups and active users in one view. Connected to Supabase.",
    stack: "React • Recharts • Supabase",
    delivery: "5 days",
    link: "https://biz-dash-pi.vercel.app/",
    preview: <SaaSPreview />,
    
  },
  {
    id: "02",
    category: "MARKETING AGENCY",
    title: "Client Reporting Dashboard",
    description:
      "Replaced monthly PDF reports with a live dashboard. Agency shares a link — clients see their GA4, ad spend and conversions in real time.",
    stack: "Google Sheets API • Recharts",
    delivery: "7 days",
    preview: <SaaSPreview />,
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
