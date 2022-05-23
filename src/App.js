import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
// import ClickCounter from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { TodoList } from "./TodoList";
// import { UcontrolledLogin } from "./UncontrolledLogin";
// import Counter from "./Counter";
// import FilteredList from "./FilteredList";
import { Language } from "./Language";
// import Sum from "./Sum";
// import { GithubUserList } from "./GithubUserList";
// import CarDetails from "./CarDetails";

export function App() {
  // const [showCounter, setShowCounter] = useState(true);

  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  // function handleToggleCounter() {
  //   setShowCounter((s) => !s);
  // }

  return (
    <>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">ENGLISH</option>
        <option value="it">ITALIANO</option>
      </select>
      <DisplayLanguage.Provider value={language}>
        <Language />
      </DisplayLanguage.Provider>
      {/* <GithubUserList /> */}
      {/* <ClickCounter /> */}
      {/* <InteractiveWelcome /> */}
      {/* <UcontrolledLogin /> */}
      {/* <Sum /> */}
      {/* <Counter /> */}
      {/* <CarDetails
        initialData={{
          model: "",
          year: "",
          color: "",
        }}
      /> */}
      {/* <FilteredList /> */}
      {/* <TodoList */}
      {/* render={(arr, addTodo, reset, removeTodo) => {
          return (
            <div>
              <form onSubmit={addTodo}>
                <input name="list" type="text" />
                <button type="submit">Submit</button>
                <button onClick={reset}>reset</button>
              </form>
              <ul>
                {arr.map((item, index) => {
                  return (
                    <div>
                      <li>{item}</li>
                      <button onClick={() => removeTodo(index)}>X</button>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        }}
      /> */}
      {/* <button onClick={handleToggleCounter}>Toggle Counter</button> */}
      {/* {showCounter && <Counter />} */}
      {/* <Login /> */}
      {/* <ClickTracker /> */}
    </>
  );
}
