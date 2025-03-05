import React from 'react';
import { Icono } from './Icono';

function EditIcon({ setOpenModal, setmodalEdit, handleEdit }) {
    return (
        <Icono
            type='edit'
            color='black'
            onClick={
                () => {
                    setOpenModal(state => !state);
                    setmodalEdit(state => !state);
                    handleEdit();
                }
            }
        />
    )
}

export { EditIcon };