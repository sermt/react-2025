import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data,js";
import CoreConcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabMenu.jsx";
import { useState } from "react";

function App({ mainTitle = "Hello world" }) {
  const [selectedTab, setSelectedTab] = useState();
  const handleSelect = (event) => {
    setSelectedTab(event.target.textContent.toLowerCase());
  };
  return (
    <div>
      <Header />
      <main>
        <h1>{mainTitle}</h1>
        <p>
          This is a simple React application that demonstrates how to use
          components and props.
          <br />
        </p>
        <section id="core-concepts">
          <h1>Core Concepts</h1>
          <ul>
            {CORE_CONCEPTS.map((coreconcept, index) => (
              <CoreConcept key={index} {...coreconcept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect} isSelected={selectedTab === "components"} label={"Components"}></TabButton>
            <TabButton onSelect={handleSelect} isSelected={selectedTab === "jsx"} label={"JSX"}></TabButton>
            <TabButton onSelect={handleSelect} isSelected={selectedTab === "props"} label={"Props"}></TabButton>
            <TabButton onSelect={handleSelect} isSelected={selectedTab === "state"} label={"State"}></TabButton>
          </menu>
          {!selectedTab ? <p>Please select a topic.</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTab]?.title}</h3>
            <p>{EXAMPLES[selectedTab]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab]?.code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
