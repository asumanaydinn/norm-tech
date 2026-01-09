import { RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LearnMoreButton = () => {
  return (
    <div className="h-20">
      <Link
        to="/hizmetlerimiz"
        className="group w-52 flex items-center gap-2 px-6 py-2 rounded-full text-amber-700 font-semibold border border-amber-700 hover:border-transparent hover:bg-slate-100 hover:shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      >
        Daha Fazla Bilgi
        <RightCircleOutlined className="text-2xl text-amber-700 transition-colors duration-300" />
      </Link>
    </div>
  );
};

export default LearnMoreButton;
