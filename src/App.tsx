import React from 'react';
import { Code, Containers, Header, Paragraph } from './components/styled';

function App() {
  return (
    <Containers.AppContainer className="App">
      <Header className="App-header">
        <Paragraph>
          Edit <Code>src/App.tsx</Code> and save to reload.
        </Paragraph>
      </Header>
    </Containers.AppContainer>
  );
}

export default App;
