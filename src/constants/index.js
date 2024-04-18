import {
  FaCode,
  FaPalette,
  FaRegLightbulb,
  FaRegSmile,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";

export const navLinks = [
  {
    label: "About Us",
    link: "#about",
    id: 1,
  },
  {
    label: "Services",
    link: "#services",
    id: 2,
  },
  {
    label: "Projects",
    link: "#projects",
    id: 3,
  },
];

export const heading =
  "Unleash Your Digital Potential: Where Innovation Meets Imagination!";

export const services = [
  {
    label: "Web Development",
    id: "web-development",
    color: "#6c5ce7",
    icon: FaCode,
    description:
      "Crafting cutting-edge websites tailored to your brand's vision and needs.",
  },
  {
    label: "WordPress Development",
    id: "wordpress-development",
    color: "#fd79a8",
    icon: FaWordpress,
    description:
      "Customizing and optimizing WordPress sites to elevate your online presence.",
  },
  {
    label: "Social Media Management",
    id: "social-media-management",
    color: "#00b894",
    icon: FaRegSmile,
    description:
      "Engaging content strategies and community management to boost your brand's social presence.",
  },
  {
    label: "Logo Branding",
    id: "logo-branding",
    color: "#ff7675",
    icon: FaPalette,
    description:
      "Crafting unique and memorable brand identities that resonate with your audience.",
  },
  {
    label: "Shopify Store",
    id: "shopify-store",
    color: "#0984e3",
    icon: FaShopify,
    description:
      "Building high-converting Shopify stores that drive sales and customer loyalty.",
  },
  {
    label: "Social Media Strategy",
    id: "social-media-strategy",
    color: "#e17055",
    icon: FaRegLightbulb,
    description:
      "Creating data-driven social media strategies to amplify your brand's reach and engagement.",
  },
];
