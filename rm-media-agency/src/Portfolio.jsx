import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import "./portfolio.css";

const socialDesigns = Array.from({ length: 26 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const extension = i < 9 ? "jpg.jpg" : "jpg.jpeg";

  return {
    type: "SOCIAL MEDIA / CREATIVE",
    title: "Social Media Creative",
    image: 
