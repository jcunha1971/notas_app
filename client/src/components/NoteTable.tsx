import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Note {
  _id: string;
  titulo: string;
  conteudo: string;
  dataCriacao: string;
}

const NoteTable: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    axios.get('/api/notas').then(response => {
      setNotes(response.data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Conteúdo</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <tr key={note._id}>
            <td>{note.titulo}</td>
            <td>{note.conteudo}</td>
            <td>{new Date(note.dataCriacao).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NoteTable;
