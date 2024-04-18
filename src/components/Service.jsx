import {
  FaCode,
  FaWordpress,
  FaRegSmile,
  FaPalette,
  FaShopify,
  FaRegLightbulb,
} from "react-icons/fa";

const Service = ({ label, color, icon: IconComponent, description }) => {
  return (
    <div className="service">
      <div className="icon-box" style={{ backgroundColor: { color } }}>
        <IconComponent size={24} />
      </div>
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
