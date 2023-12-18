function Button1({url}) {
  return (
    <div
      className={`bg-white shadow-custom-2 border-2 border-black w-16 md:w-32`}
    >
      <a href={url}>
        <p className="text-center text-md md:text-xl">READ</p>
      </a>
    </div>
  );
}

export default Button1;
