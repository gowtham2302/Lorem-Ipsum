function Button2({ url, bg }) {
  if (bg === "black") {
    return (
      <div
        className={`bg-${bg} shadow-custom-3 border-2 border-white w-16 md:w-20 `}
      >
        <a href={url}>
          <p className="text-center text-md md:text-xl text-white">VIEW</p>
        </a>
      </div>
    );
  }
  return (
    <div
      className={`bg-${bg} shadow-custom-2 border-2 border-black w-16 md:w-20 `}
    >
      <a href={url}>
        <p className="text-center text-md md:text-xl">VIEW</p>
      </a>
    </div>
  );
}

export default Button2;
