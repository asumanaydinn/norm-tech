import { RightCircleOutlined } from "@ant-design/icons";

const LearnMoreButton = () => {
  const handleClick = () => {
    const section = document.getElementById("about-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-slate-100 font-semibold shadow-lg border border-blue-700 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-[1.03]"
    >
      Learn More
      <RightCircleOutlined className="text-xl transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110" />
    </button>
  );
};

export default LearnMoreButton;
