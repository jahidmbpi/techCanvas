import { ScrollRestoration } from "react-router-dom";
import Path from "../../../components/path/Path";
// import projectVideo from "../../../assets/videos/3.mp4";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";
const LocalGuaid = () => {
  return (
    <div className="mt-4 mb-20">
      <ScrollRestoration />
      <Path projectPath="/local-guaid" projectName="LocalGuaid" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard4 "></div>
      </div>
      <div className="my-7">
        <ProjectTItle
          prevURL="https://local-guaid-client.vercel.app"
          srcURL="https://github.com/jahidmbpi/localGuaid-client"
          title="LocalGuaid"
          subTitile="LocalGuide is a location-based service platform that helps users discover nearby places, services, and attractions. Users can share local experiences, post reviews, and explore trusted recommendations from the community."
        />
      </div>
      <div className="mt-20 space-y-6">
        <div className="flex items-center flex-col sm:flex-row gap-3">
          <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
            Project Overview
          </h1>
          <div className="h-[2px] w-8/12 bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
          LocalGuaid is a location-based web platform that helps users discover
          nearby places, services, and attractions with ease. Users can explore
          local spots, read authentic reviews, and share their own experiences
          to guide others in making better local decisions.
          <br />
          <br />
          The platform encourages community participation by allowing users to
          post reviews, rate places, and interact with shared experiences.
          Admins have access to a dedicated dashboard to manage users, monitor
          shared content, and ensure the reliability and quality of information
          across the platform.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Key Features
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 space-y-7">
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Discover Nearby Places :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                Users can explore nearby locations, services, and attractions
                based on their interests. The platform provides detailed
                information and community-driven insights to help users choose
                the best local options.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Review & Experience Sharing :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                Logged-in users can share their experiences by posting reviews
                and ratings for different places. This helps build a trusted
                community where users guide each other with real-life local
                experiences.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                User Profile Management :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                Each user has a personal profile where they can update their
                information, manage shared reviews, and view their activity
                across the platform.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Admin Dashboard :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                A secure admin dashboard allows administrators to manage users,
                moderate reviews, and maintain the quality and authenticity of
                local information shared on the platform.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 space-y-6">
        <div>
          <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
            Future plans
          </h1>
        </div>
        <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
          Future development of LocalGuaid will focus on enhancing performance
          and user experience. Planned features include advanced search and
          filtering, location-based recommendations, and real-time user
          notifications.
          <br />
          <br />
          Additionally, data optimization techniques and efficient backend logic
          will be implemented to ensure faster response times and smooth
          scalability as the user base grows.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Project Stacks
        </h1>
        <div className="mt-7 flex flex-wrap sm:gap-3 gap-2">
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            TypeScript
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            React
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            TailwindCSS
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Shadcn/ui
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Express.js
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            PostgressQl
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LocalGuaid;
