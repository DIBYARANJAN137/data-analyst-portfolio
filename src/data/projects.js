
import {
  Utensils,
  TrendingUp,
  TrainFront,
} from "lucide-react";

export const projects = [
  {
    id: "quickbites",
    title: "QuickBites — Order & Delivery Analysis",
    category: "Business Intelligence",
    status: "Completed",
    description:
      "Analyzed online food orders to understand revenue performance, cancellations, customer behavior, and delivery experience.",
    question:
      "How do revenue, cancellations, and customer experience vary across time, cities, and restaurants?",
    tools: ["Power BI", "DAX", "Data Cleaning"],
    icon: Utensils,
    accent: "green",
    findings: [
      "Fast Food generated the highest revenue among the analyzed categories.",
      "Bhubaneswar recorded 333 orders, while Rourkela recorded 127.",
      "April had the highest monthly cancellation percentage.",
    ],
    links: {
      github: "",
      dashboard: "",
    },
    image: "/projects/quickbites.png",
  },
  {
    id: "sales-analysis",
    title: "Sales Analysis Dashboard",
    category: "Sales Analytics",
    status: "Dashboard built",
    description:
      "A sales reporting dashboard designed to explore sales performance and communicate business metrics through visualizations.",
    question:
      "How can sales data help identify performance trends and areas that need attention?",
    tools: ["Power BI", "Data Visualization", "Business KPIs"],
    icon: TrendingUp,
    accent: "yellow",
    findings: [],
    links: {
      github: "",
      dashboard: "",
    },
    image: "/projects/sales-analysis.png",
  },
  {
    id: "irctc-analysis",
    title: "IRCTC Booking Analysis",
    category: "Exploratory Analytics",
    status: "In progress",
    description:
      "Exploring railway booking data and developing a dashboard to examine booking patterns and month-over-month changes.",
    question:
      "How do booking volumes change over time, and which months record higher or lower activity?",
    tools: ["Power BI", "DAX", "Data Analysis"],
    icon: TrainFront,
    accent: "blue",
    findings: [
      "November recorded 2,088 bookings in the analyzed dataset.",
      "February recorded 1,437 bookings, the lowest monthly total in the dataset.",
    ],
    links: {
      github: "",
      dashboard: "",
    },
    image: "/projects/irctc-analysis.png",
  },
];
