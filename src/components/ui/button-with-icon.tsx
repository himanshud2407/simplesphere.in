import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ButtonWithIconDemo = ({ className, circleClassName }: { className?: string; circleClassName?: string }) => {
  return (
    <Button className={`group/button relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer ${className}`}>
      <span className="relative z-10 transition-all duration-500">
        Enroll Now
      </span>
      <div className={`absolute right-1 w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover/button:right-[calc(100%-44px)] group-hover/button:rotate-45 shadow-sm ${circleClassName}`}>
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default ButtonWithIconDemo;
