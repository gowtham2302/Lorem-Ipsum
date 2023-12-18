import Card3 from "../UI/Card3";
import img1 from "../../assets/WkPgImg1.svg";
import img2 from "../../assets/WkPgImg2.svg";

function Section1() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-wrap lg:flex-nowrap justify-around pt-12 px-12">
        <div className="xl:w-4/12 flex flex-col gap-8 items-center justify-center mb-2 p-4">
          <div className="lg:w-96 p-2">
          <p className="text-4xl md:text-5xl xl:text-6xl font-semibold mt-4">WEB DESIGN</p>
          <p className="text-xl xl:text-2xl mt-4">
            {"Websites so user-friendly, even your grandma can't get lost."}
          </p>
          </div>
          <img src={img1} className="w-80 hidden xl:block -mb-6 -ml-52" alt="web design" />
        </div>
        <div className="flex flex-wrap gap-8 lg:gap-6 xl:gap-8 p-4  mb-4 xl:mb-0 md:flex-nowrap ">
          <Card3 img={img2} url={"/"} bg="gray-100"/>
          <Card3 img={img2} url={"/"} bg="gray-100"/>
        </div>
      </div>
    </section>
  );
}

export default Section1;
