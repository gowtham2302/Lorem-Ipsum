export default function Card1({ img, title, deg , name}) {
  return (
    <div>
    <div className={`bg-white shadow-custom p-4 w-64 transform ${deg} hover:transform hover:rotate-0`}>
      <img src={img} className="w-full h-auto" />
      <h2 className="text-3xl text-center  font-semibold p-3 mb-2">{title}</h2>
    </div>
    <p className="text-3xl text-gray-900 text-center font-bold p-8 mt-8 ">{name}</p>
    </div>
  );
}
