import Puzzle from "../../assets/Puzzle.svg";

function Section2() {
  return (
    <section>
      <div className="bg-black">
        <p className="text-gray-100 text-4xl text-center p-4 lg:p-8">
          LEVEL 1 : THE DEETS
        </p>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto flex items-center">
            <p className="hidden text-gray-100 text-4xl -rotate-90 xl:block lg:p-2 lg:w-6/12 lg:-ml-48 lg:-mr-24">
              WHAT WE DO
            </p>
            <img src={Puzzle} className="hidden xl:block" />
            <div
              className="grid gap-5 lg:p-6 lg:ml-12"
              style={{ height: "20rem" }}
            >
              <p className="text-2xl text-left text-gray-100 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className="text-2xl font-semibold text-gray-100">
                Just kidding..
              </h2>

              <p className="text-2xl text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus praesentium tenetur pariatur.
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-100 text-4xl text-center p-8">
          WE MAKE YOUR PROBLEMS DISAPPEAR
        </p>
      </div>
    </section>
  );
}

export default Section2;
