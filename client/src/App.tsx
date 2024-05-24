import React from 'react';
import Header from './components/Header';
import NoteTable from './components/NoteTable';
import NoteForm from './components/NoteForm';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <NoteForm />
        <NoteTable />
      </div>
    </div>
  );
}

export default App;
