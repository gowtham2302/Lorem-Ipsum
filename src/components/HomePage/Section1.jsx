import img from "../../assets/hm-ani.svg";
import img2 from "../../assets/hm-pin.svg";
import Birdlg from "../../assets/Birdlg.svg";
import Birdsm from "../../assets/Birdsm.svg";

function Section1() {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="flex">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 xl:-mb-12 xl:pt-12">
            <div className="mx-auto lg:ml-7 ">
              <h2 className="text-8xl font-extrabold text-black">{"WE'RE"}</h2>
              <h2 className="text-8xl font-extrabold text-black">GOOD.</h2>
              <h2 className="text-6xl font-extrabold text-black">JUST ASK</h2>
              <h2 className="text-6xl font-extrabold text-black">YOUR MOM.</h2>
              <div className="flex gap-4 mt-2">
                {"WEB"}
                <img src={img2} alt="" />
                {"INTERACTIVE"}
                <img src={img2} alt="" />
                {"BRANDING"}
                <img src={img2} alt="" />
                {"PRINT"}
              </div>
              <p className="mt-2 text-lg text-black lg:w-60 ">
                {"IT’S WHAT WE LOVE TO DO. SO RELAX, WE’VE GOT THIS."}
              </p>
            </div>
          </div>

          <img src={Birdlg} className="mr-72 mt-24" />
          <img src={Birdsm} className="mr-52 mb-24" />

          
        </div>
        <div className="hidden xl:block">
          <img src={img} className="-mb-28" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
