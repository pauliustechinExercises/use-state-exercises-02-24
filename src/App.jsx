import BasicCounter from "./components/Task1BasicCounter";
import ToggleButton from "./components/Task2ToggleButton";
import DynamicInputField from "./components/Task3DynamicInputField";
import ShowHideContent from "./components/Task4ShowHideContent";
import FormStateManagement from "./components/Task5FormStateManagement";
import MultipleCounters from "./components/Task6MultipleCounters";
import ToDoList from "./components/Task7ToDoList";
import Timer from "./components/Task12Timer";
import ShoppingCart from "./components/Task13ShoppingCart";
import "./App.css";

function App() {
  return (
    <>
      <BasicCounter />
      <ToggleButton />
      <DynamicInputField />
      <ShowHideContent />
      <FormStateManagement />
      <MultipleCounters />
      <ToDoList />
      <Timer />
      <ShoppingCart />
    </>
  );
}

export default App;
