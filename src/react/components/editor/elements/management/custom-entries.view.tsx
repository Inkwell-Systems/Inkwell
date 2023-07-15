import React from 'react';
import {
    EditorElementContainer,
    EditorSectionContainer,
    EditorSectionTitle,
} from '../utils.tsx';

const CustomEntriesView = () => {
    return (
        <EditorElementContainer>
            <EditorSectionTitle>Custom Entries</EditorSectionTitle>
            <EditorSectionContainer>
                <p>Custom entries are not yet supported.</p>
            </EditorSectionContainer>
        </EditorElementContainer>
    );
};

export default CustomEntriesView;
