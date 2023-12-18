import Card3 from "../UI/Card3";
import img2 from "../../assets/WkPgImg2.svg";
import img3 from "../../assets/wk-heart.svg";

function Section1() {
  return (
    <section className="bg-black ">
      <div className="flex flex-wrap lg:flex-nowrap justify-around p-12">
        <div className="flex flex-wrap gap-8 items-center lg:gap-6 xl:gap-8 p-4  mb-4 xl:mb-0 md:flex-nowrap ">
          <Card3 img={img2} url={"/"} bg="black" />
          <Card3 img={img2} url={"/"} bg="black" />
        </div>
        <div className="xl:w-4/12 flex flex-col gap-12 items-center justify-center mb-2 p-4 text-white">
          <div className="lg:w-96 p-2 text-end">
            <p className="text-4xl md:text-5xl xl:text-6xl font-semibold mt-4 ">
              PRINT
            </p>
            <p className="text-xl xl:text-2xl mt-auto mb-auto pt-2">
              {
                "Creating print materials that stay in your memory like your trauma."
              }
            </p>
          </div>
          <img
            src={img3}
            className="w-96 hidden xl:block "
            alt="web design"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
