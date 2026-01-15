import { ScrollRestoration } from "react-router-dom";
import Path from "../../../components/path/Path";
import ProjectTItle from "../../../components/ProjectTitle/ProjectTItle";

const PercelDelivery = () => {
  return (
    <div className="mt-4 mb-20">
      <ScrollRestoration />
      <Path projectPath="/percel-delivery" projectName="Percel Delivery" />
      <div className="w-full sm:h-96 h-52 bg-cover mt-4 overflow-hidden dark:border-b-2  dark:border-b-gray-500">
        <div className="w-full bg-cover h-full  projectCard5 "></div>
      </div>

      <div className="my-7">
        <ProjectTItle
          prevURL="https://percel-delevery-client.vercel.app"
          srcURL="https://github.com/jahidmbpi/percel-delevery-client"
          title="Percel delivery management"
          subTitile="Stay Manager is a hostel management platform where college students can make bookings and follow admin's notices on notice boards and like comments."
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
          Parcel Delivery Management is a web-based platform designed to
          simplify and automate the parcel delivery process. Users can create
          parcel delivery requests by providing sender, receiver, and parcel
          information. Each parcel goes through multiple delivery stages which
          can be tracked in real time.
          <br />
          <br />
          The system supports role-based access including Admin, Sender, and
          Receiver. Admins can manage users, monitor all parcel requests, and
          update delivery statuses. Senders can create and track parcels, while
          receivers can view parcel details and delivery updates. Secure
          authentication using email/password and OAuth ensures safe access and
          smooth user experience.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="text-[22px]  font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Authntication
        </h1>
        <ul className=" list-decimal ml-6 mt-6 space-y-7">
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Email & password:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              Email & password Authntication create user cookie.
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Google & Github
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              google & github use Authntication use Cookie Passport.js
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Admin email:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              admin@gmail.com
            </p>
          </li>
          <li className="space-y-1 dark:text-gray-200">
            <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
              Admin password:
            </h1>
            <p className="text-xs sm:text-[16px] leading-6  dark:text-gray-300 text-gray-600">
              12345A@
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-20">
        <h1 className="text-[22px] font-extrabold text-gray-700 dark:text-gray-300 tracking-[1px]">
          Key Features
        </h1>
        <div className="mt-8">
          <ul className=" list-decimal ml-6 space-y-7">
            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Parcel Create & Request System :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                Users can create parcel delivery requests by providing sender
                and receiver details along with parcel information such as
                weight, type, and destination. Each request is stored securely
                and tracked throughout the delivery lifecycle.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Role Based Access Control :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                The system supports multiple roles including Admin, Sender, and
                Receiver. Each role has specific permissions to ensure secure
                and controlled access to parcel data and system features.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Parcel Tracking System :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                Users can track the current status of their parcels such as
                pending, picked up, in transit, or delivered. Status updates are
                managed by the admin to keep users informed in real time.
              </p>
            </li>

            <li className="space-y-1 dark:text-gray-200">
              <h1 className="sm:text-[17px] text-[16px] font-bold text-gray-700 dark:text-gray-300 tracking-[1px]">
                Admin Dashboard :
              </h1>
              <p className="text-xs sm:text-[16px] leading-6 dark:text-gray-300 text-gray-600">
                A dedicated admin dashboard allows administrators to manage
                users, view all parcel requests, update delivery statuses, and
                monitor the overall parcel delivery workflow efficiently.
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
          Future enhancements of the Parcel Delivery Management system will
          focus on improving performance, scalability, and user experience.
          Planned features include real-time notifications for parcel status
          updates, advanced search and filtering options, and delivery history
          analytics for admins.
          <br />
          <br />
          Additionally, route optimization and automated status updates will be
          implemented to make the delivery process faster and more efficient.
          These improvements aim to handle higher traffic smoothly and provide a
          more reliable and intelligent parcel delivery platform.
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
            Next.js
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Redux-toolkit
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Rtk-query
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
            MongoDB
          </h1>
          <h1 className="px-4 py-2 bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-500 border text-[15px] font-bold border-gray-200 dark:border-gray-600">
            Mongoose
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PercelDelivery;
