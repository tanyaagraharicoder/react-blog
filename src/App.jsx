import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  return (
    <div >
      <h1>props in react </h1>
      <Wrapper>
          <h2>Hello everyone </h2>
     
      </Wrapper>
      <Wrapper>
          <h2>my name is tanya  </h2>
     
      </Wrapper>
      <Wrapper>
          <h2> login with google  </h2>
     
      </Wrapper>



      {/* <User name="Tanya Agrahari" />
      <User/>
      <User/>
      <User/>
      <User/> */}
    </div>
  );
}

export default App;
