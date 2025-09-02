function Wrapper({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "blue",
        border: "2px solid red",
        margin: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
