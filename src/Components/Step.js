function Step(props) {
  return (
    <div className={"flex items-start justify-start " + props.className}>
      <img
        className={"pr-4 " + "h-" + props.imgh + " w-" + props.imgw}
        src={props.image}
        alt="1"
      />

      <div className="flex flex-col">
        <h2 className="text-md font-semibold">{props.title}</h2>
        <p className="pt-4 space-x-1 text-sm font-normal ">{props.children}</p>
      </div>
    </div>
  );
}
export default Step;
