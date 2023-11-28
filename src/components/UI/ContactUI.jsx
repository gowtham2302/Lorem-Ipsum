import Cloudlg from "../../assets/Cloudlg.svg";
import Cloudsm from "../../assets/Cloudsm.svg";
import Plantlg from "../../assets/Plantlg.svg";
import Plantsm from "../../assets/Plantsm.svg";
import Birdlg from "../../assets/Birdlg.svg";
import Birdsm from "../../assets/Birdsm.svg";
import Squarelg from "../../assets/Squarelg.svg";

function ContactUI() {
  return (
    <section className="bg-gray-100">
      <div className="flex items-end gap-8 lg:gap-52 xl:-mb-24">
        <div className="">
          <img src={Cloudlg} alt="Cloud" />
        </div>

        <div className="">
          <img src={Birdlg} alt="Bird" />
        </div>
        <div className="">
          <img src={Birdsm} alt="Bird" />
        </div>
        <div className="">
          <img src={Cloudsm} alt="Cloud" />
        </div>
      </div>
        <div className="ml-auto hidden -mr-16 xl:block">
          <img src={Cloudlg} className="w-36 xl:w-72 ml-auto" alt="Cloud" />
        </div>
      <div className="flex justify-center p-4 xl:-mt-20">
        <img src={Squarelg} className="w-24 md:w-36 xl:w-56" alt="Square" />
      </div>
      <div className="flex justify-between px-12 items-end ">
        <div className="-mb-11 lg:-mb-16">
          <img src={Plantlg} className="w-28 pt-8 lg:w-full lg:p-0" alt="Plant" />
        </div>
        <div className="-mb-8 lg:-mb-12">
          <img src={Plantsm} className="w-16 lg:w-full" alt="Plant" />
        </div>
      </div>
    </section>
  );
}

export default ContactUI;
