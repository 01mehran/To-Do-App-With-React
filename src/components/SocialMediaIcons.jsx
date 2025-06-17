// Icons;
import googleIcon from "@icons/google_icon.svg";
import FacebookIcon from "@icons/Facebook_icon.svg";

export const SocialMediaIcons = () => {
  return (
    <article className="font-inder flex w-full items-center justify-between">
      <div className="bg-gray-200 flex w-fit cursor-pointer items-center space-x-3 rounded-[7px] px-3 sm:px-6 py-1 shadow-md">
        <img src={googleIcon} alt="googleIcon" className="w-4" />
        <span className="text-sm font-medium">Google</span>
      </div>
      <div className="bg-gray-200 flex w-fit cursor-pointer items-center space-x-3 rounded-[7px] px-3 sm:px-6 py-1 shadow-md">
        <img src={FacebookIcon} alt="FacebookIcon" className="w-4" />
        <span className="text-sm font-medium">Facebook</span>
      </div>
    </article>
  );
};
