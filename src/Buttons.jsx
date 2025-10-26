const Buttons = () => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id="btn-container">
      {buttons.map((name) => (
        <button>{name}</button>
      ))}
    </div>
  );
};
export default Buttons;
