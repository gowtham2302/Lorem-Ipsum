import Button1 from "./Button1";

function Card2({img , url}) {
  return (
    <div>
      <div className={`bg-white shadow-custom p-6 `}>
        <img src={img} className="w-full h-auto" />
        <div className="flex justify-center p-4">
          <Button1 url={url}/>
        </div>
      </div>
    </div>
  );
}

export default Card2;
