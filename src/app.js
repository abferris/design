import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import List from "./components/list/list.js"
import Grid from "./components/grid/grid.js"
// import "./design/reset.scss";
import "./design/design.scss";
import "./design/formparts/form.scss"
import "./design/lists.scss"
const App = () => {
  return (
    <>
      <Header title="React Design" />
      <Content />
 
      <List 
      type='ordered'
      items={['a', 'b', 'c']}
      />
      <List 
      type='unordered'
      items={['do', 're', 'mi']}
      />
      <Grid 
      elements={['Time','space','everything','my life']}
      columns={'four'}
      />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;
