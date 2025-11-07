const Buttons = ({ onbuttonclick }) => {
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
    "c",
  ];
  return (
    <div id="btn-container">
      {buttons.map((name) => (
        <button key={name} onClick={() => onbuttonclick(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
