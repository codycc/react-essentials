import {useState} from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
         
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} 
          description={CORE_CONCEPTS[3].description} 
          image={CORE_CONCEPTS[0].image}/>
         
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")} label="Components"/>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")} label="JSX"/>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")} label="Props"/>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")} label="State"/>
          </menu>
          {!selectedTopic ?<p>PLEASE SELECT A TOPIC</p> : <div id="tab-content">
           
           <h3>{EXAMPLES[selectedTopic].title}</h3>
           <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
             <code>
             {EXAMPLES[selectedTopic].code}
             </code>
           </pre>
         </div>  }
          
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
