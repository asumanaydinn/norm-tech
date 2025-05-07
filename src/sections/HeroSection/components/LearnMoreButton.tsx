import { RightCircleOutlined } from "@ant-design/icons";

const LearnMoreButton = () => {
  const handleClick = () => {
    const section = document.getElementById("about-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-20">
      <button
        onClick={handleClick}
        className="group w-44 flex items-center gap-2 px-6 py-2 rounded-full text-blue-700 font-semibold border border-blue-700 hover:border-transparent hover:bg-slate-100 hover:shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Learn More
        <RightCircleOutlined className="text-2xl text-blue-700 transition-colors duration-300" />
      </button>
    </div>
  );
};

export default LearnMoreButton;
