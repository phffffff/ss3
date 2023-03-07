// import ValidateForm from "./components/ValidateForm/ValidateForm";

// import ReactSpring from "./components/ReactSpring/ReactSpring";
// import TodoListStyledTheme from "./components/TodoListStyledTheme/TodoListStyledTheme";

// import Stylethemes from "./components/StyleThemes/Stylethemes";

// import { ButtonCustoms, ButtonLarge } from './components/StyledComponent/StyledComponent'

// import StyleComponentWithComponent from "./components/StyledComponent/StyleComponentWithComponent";

// import { Provider } from 'react-redux';

// import store from './components/TodoListStyledTheme/Redux/store'
// import FakeInput from "./components/reduxUseSelect_UseDispath/FakeInput";
import TroChoi from './components/TroChoi/TroChoi'

// import store from "./components/reduxUseSelect_UseDispath/redux/store";

import { Provider } from 'react-redux'
import store from './components/TroChoi/redux/configStore'



function App() {
  return (
    <div>
      {/* <ValidateForm /> */}
      {/* <ButtonCustoms >ButtonCustoms</ButtonCustoms>
      <ButtonLarge fontColor={'red'}>ButtonLarge</ButtonLarge> */}
      {/* <StyleComponentWithComponent>Halo</StyleComponentWithComponent> */}
      {/* <Stylethemes /> */}
      {/* <Provider store={store}>
        <TodoListStyledTheme />
      </Provider> */}
      {/* <Provider store={store}>
        <FakeClone />
      </Provider> */}
      {/* <ReactSpring /> */}
      <Provider store={store}>
        <TroChoi />
      </Provider>
    </div >
  );
}

export default App;
