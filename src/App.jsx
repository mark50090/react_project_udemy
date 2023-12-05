import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import ComponentsImg from './assets/components.png';
import { useState } from 'react';


function App() {
  const [selectTopic, setSelectTopic] = useState()

  function handleSelect(selectButton) {
    setSelectTopic((selectTopic) => selectTopic = selectButton)
  }

  let tabContents = <p> Please select a topic.</p>

  if(selectTopic){
    tabContents = <div id="tab-content">
                      <h3>{EXAMPLES[selectTopic].title}</h3>
                      <p>{EXAMPLES[selectTopic].description}</p>
                      <pre>
                        <code>
                          {EXAMPLES[selectTopic].code}
                        </code>
                      </pre>
                  </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map( (conceptItem) => <CoreConcept key={conceptItem.title}{...conceptItem} />  ) }


            {/* <CoreConcept 
              title="Concepts"
              description="The core UI building block."
              image={ComponentsImg}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected = { selectTopic === 'components'} onSelect={ () => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected = { selectTopic === 'jsx'} onSelect={ () => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected = { selectTopic === 'props'} onSelect={ () => handleSelect("props")}>PROPS</TabButton>
          <TabButton isSelected = { selectTopic === 'state'} onSelect={ () => handleSelect('state')}>State</TabButton>
          </menu>
           {/* {selectTopic ? <div id="tab-content">
              <h3>{EXAMPLES[selectTopic].title}</h3>
              <p>{EXAMPLES[selectTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectTopic].code}
                </code>
              </pre>
           </div> : <p> Please select a topic.</p>
           } */}
           {tabContents}
        </section>
        
      </main>
    </div>
  );
}

export default App;