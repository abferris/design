import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import List from "./components/list/list.js"
// import "./design/reset.scss";
import "./design/design.scss";
import "./design/formparts/form.scss"
import "./design/lists.scss"
const App = () => {
  return (
    <>
      <Header title="React Design" />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
      <List 
      type='ordered'
      items={['a', 'b', 'c']}
      />
      <List 
      type='unordered'
      items={['do', 're', 'mi']}
      />
    </>
  );
};

export default App;
