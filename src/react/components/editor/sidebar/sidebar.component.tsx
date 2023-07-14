// TODO(calco): Consider modularizing this. For now too diverse to do so?
import PermaSidebar from './perma-sidebar.component.tsx';
import styled from 'styled-components';
import React, {ReactElement, useState} from 'react';
import OverviewIcon from './icons/overview.icon.tsx';
import ManagementIcon from './icons/management.icon.tsx';
import ViewsIcon from './icons/views.icon.tsx';
import InnerSidebarElement from './inner-sidebar-element/inner-sidebar-element.component.tsx';

const SidebarContainer = styled.div`
    display: flex;

    height: 100%;
`;

const InnerSidebarContainer = styled.div`
    min-width: 15rem;
    width: 15vw;
    max-width: 20rem;
    height: 100%;

    background-color: #1d1d1f;

    padding: 1.5rem;
`;

const InnerHeader = styled.h1`
    color: #b4b4b4;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
`;

const Separator = styled.hr`
    border: 2px solid #131315;
    margin-bottom: 1rem;
    border-radius: 1rem;
`;

const EditorSidebar = () => {
    const [selected, setSelected] = useState(0);
    const [innerSelected, setInnerSelected] = useState('0');

    const elements = [
        {
            icon: <OverviewIcon selected={selected === 0} />,
            title: 'OVERVIEW',
            options: [],
        },
        {
            icon: <ManagementIcon selected={selected === 1} />,
            title: 'MANAGEMENT',
            options: [
                [
                    {
                        title: 'Project Settings',
                        element: <div>Project Settings</div>,
                    },
                    {
                        title: 'Collaboration',
                        element: <div>Collab screen</div>,
                    },
                    {
                        title: 'Custom Entries',
                        element: <div>Massive work in progress lmao</div>,
                    },
                ],
            ],
        },
        {
            icon: <ViewsIcon selected={selected === 2} />,
            title: 'VIEWS',
            options: [
                [
                    {
                        title: 'Table',
                        element: <div>Tables</div>,
                    },
                    {
                        title: 'Spreadsheet',
                        element: <div>Spreadsheet</div>,
                    },
                    {
                        title: 'List',
                        element: <div>List</div>,
                    },
                    {
                        title: 'Diagram',
                        element: <div>Diagram</div>,
                    },
                ],
                [
                    {
                        title: 'Scopes',
                        element: <div>Scopes</div>,
                    },
                ],
            ],
        },
    ];

    return (
        <SidebarContainer>
            <PermaSidebar
                selected={selected}
                setSelected={setSelected}
                elements={elements}
            />

            <InnerSidebarContainer>
                <InnerHeader>{elements[selected].title}</InnerHeader>
                <Separator />

                {/* TODO(calco): What the frick is this lmao. */}
                {/* TODO(calco): Please use hashing instead of string addition. */}
                {/* TODO(calco): That is the most frontend webdev thing */}
                <div>
                    {elements[selected].options.map((li, i1) => (
                        <>
                            {li.map((option, i2) => (
                                <InnerSidebarElement
                                    key={i1 + i2}
                                    title={option.title}
                                    selected={
                                        innerSelected ===
                                        i1.toString() + i2.toString()
                                    }
                                    onClick={() =>
                                        setInnerSelected(
                                            i1.toString() + i2.toString(),
                                        )
                                    }
                                />
                            ))}
                            <Separator key={i1} />
                        </>
                    ))}
                </div>
            </InnerSidebarContainer>
        </SidebarContainer>
    );
};

export default EditorSidebar;
