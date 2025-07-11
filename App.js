import Emi from './component/emi';
import React from 'react';
import Table from './component/table';


function App() {
  return (
    <div className="App">
      <Emi /> {/* EMI Calculator Component */}
      <Table /> {/* EMI Data Table Component */}
      {/* Additional components or content can be added here */}
    </div>
  );
}

export default App;
