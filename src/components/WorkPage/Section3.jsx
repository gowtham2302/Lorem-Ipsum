import Card3 from "../UI/Card3";
import img1 from "../../assets/wk-puzzle.svg";
import img2 from "../../assets/wk-ohno.svg";
import img3 from "../../assets/WkPgImg2.svg";

function Section1() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-wrap lg:flex-nowrap justify-around pt-12 px-12">
        <div className="xl:w-4/12 flex flex-col gap-8 items-center justify-center mb-2 p-4 lg:mb-36">
          <div className="lg:w-96 p-2">
            <p className="text-4xl md:text-5xl xl:text-6xl font-semibold mt-4 ">
              BRANDING
            </p>
            <p className="text-xl xl:text-2xl mt-4">
              {"Crafting brands that leave an impression as unforgettable as your ex."}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img
            src={img1}
            className="w-48 hidden xl:block"
            alt="web design"
          />
          <img src={img2} className="w-48 hidden xl:block -ml-24"/>
          </div>
        <div className="flex flex-wrap gap-8 lg:gap-6 xl:gap-8 p-4  mb-4 xl:mb-0 md:flex-nowrap ">
          <Card3 img={img3} url={"/"} bg="gray-100" />
          <Card3 img={img3} url={"/"} bg="gray-100" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
