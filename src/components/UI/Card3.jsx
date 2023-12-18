import Button2 from "./Button2";

function Card3({ img, url , bg}) {

  const shadow = bg === "black" ? "shadow-custom-3" : "shadow-custom-2";

  return (
    <div>
      <div className={`bg-${bg} ${shadow} border-white border-2 p-6 `}>
        <img src={img} className="" />
        <div className="flex justify-center p-4">
          <Button2 url={url} bg={bg}/>
        </div>
      </div>
    </div>
  );
}

export default Card3;
