import Card1 from "../UI/Card1";
import Person from "../../assets/Person.svg";

function Section3() {
  return (
    <section>
      <div className="bg-gray-100">
        <p className="text-black text-4xl text-center p-4 lg:p-8">
          LEVEL 2: THE THREE MUSKETEERS
        </p>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex md:gap-32 flex-wrap justify-center">
            <Card1
              img={Person}
              title={"Comical"}
              deg={"-rotate-6"}
              name={"SURYA PRAKASH"}
            />
            <Card1
              img={Person}
              title={"Fabulous"}
              deg={"rotate-3"}
              name={"SNEHA S"}
            />
            <Card1
              img={Person}
              title={"Organized"}
              deg={"-rotate-12"}
              name={"PRAVEEN SA"}
            />
          </div>
        </div>
        <p className="text-black text-4xl text-center p-8">
          THE MORTALS WHO MAKE IT HAPPEN
        </p>
      </div>
    </section>
  );
}

export default Section3;
