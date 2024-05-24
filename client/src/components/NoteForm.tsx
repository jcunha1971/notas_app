import React, { useState } from 'react';
import axios from 'axios';

const NoteForm: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/notas', { titulo, conteudo });
    setTitulo('');
    setConteudo('');
    // refresh notes list (could be done with a callback or state lifting)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)} 
        />
      </div>
      <div>
        <label>Conteúdo</label>
        <textarea 
          value={conteudo} 
          onChange={(e) => setConteudo(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Adicionar Nota</button>
    </form>
  );
}

export default NoteForm;
