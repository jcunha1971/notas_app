import React from 'react';
    import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
    import DeleteIcon from '@mui/icons-material/Delete';

    interface Note {
      id: string;
      title: string;
      content: string;
    }

    interface NotesTableProps {
      notes: Note[];
      onDelete: (id: string) => void;
    }

    function NotesTable({ notes, onDelete }: NotesTableProps) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notes.map((note) => (
                <TableRow key={note.id}>
                  <TableCell>{note.title}</TableCell>
                  <TableCell>{note.content}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => onDelete(note.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

    export default NotesTable;
    