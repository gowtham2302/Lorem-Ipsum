import Card2 from "../UI/Card2";
import Pacman from "../../assets/pacman.svg";
import Blogimg from "../../assets/blogimg.svg";

function BlogSection() {
  return (
    <section>
      <div className="bg-gray-100 md:px-12 md:pt-12">
        <div className="flex flex-wrap justify-center gap-6 p-6 lg:gap-12 lg:p-0">
          <Card2 img={Blogimg} />
          <Card2 img={Blogimg}/>
          <Card2 img={Blogimg}/>
          <Card2 img={Blogimg}/>
          <Card2 img={Blogimg}/>
          <Card2 img={Blogimg}/>
        </div>
          <img src={Pacman} className="pt-12 -mb-1 ml-auto w-80 hidden lg:block"></img>
      </div>
    </section>
  );
}

export default BlogSection;
