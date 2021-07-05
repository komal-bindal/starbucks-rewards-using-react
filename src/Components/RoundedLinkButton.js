function RoundedLinkButton(props) {
  return (
    <a
      className={
        "rounded-full border py-2 px-4 flex-shrink-0 tracking-wide " +
        props.className
      }
      href={props.href}
    >
      {props.children}
    </a>
  );
}
export default RoundedLinkButton;
