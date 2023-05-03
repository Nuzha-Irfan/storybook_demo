import React from "react";
import Button from "./Components/Marketrix/Buttons/Button"
import { main } from "./Components/Marketrix/Buttons/Button.stories";

function App() {
  return (
    <div className="App">
      <Button {...main.args} handleClick={() => alert("Button clicked!")} />
      
<Button
  backgroundColor="#7F56D9"
  border="1px solid"
  borderColor="#6941C6"
  color="white"
  direction="row"
  disabledColor="#E9D7FE"
  focusColor="#F4EBFF"
  hoverColor="#5C3DA7"
  label="Button CTA"
  size="sm"
  type="Secondary"
/>


<Button
  backgroundColor="#7F56D9"
  border="1px solid"
  borderColor="#6941C6"
  color="white"
  direction="column"
  disabledColor="#E9D7FE"
  focusColor="#F4EBFF"
  hoverColor="#5C3DA7"
  label="Button CTA"
  size="sm"
  type="Secondary Gray"
/>

<Button
  backgroundColor="#7F56D9"
  border="1px solid"
  borderColor="#6941C6"
  color="white"
  direction="row"
  disabledColor="#E9D7FE"
  focusColor="#F4EBFF"
  hoverColor="#5C3DA7"
  label="OK"
  size="sm"
  type="Tertiary"
/>


<Button
  backgroundColor="#7F56D9"
  border="1px solid"
  borderColor="#6941C6"
  color="white"
  direction="row"
  disabledColor="#E9D7FE"
  focusColor="#F4EBFF"
  hoverColor="#5C3DA7"
  icon="plus"
  label="Add"
  size="sm"
  type="Tertiary"
/>
    </div>
  );
}

export default App;



