import EmailInvitation from './email-invitation.component.tsx';
import {useState} from 'react';
import styled from 'styled-components';
import LinkInvitation from './link-invitation.component.tsx';
import UseProjectProvider from '../../../../../../hooks/project-provider/project-provider.hook.ts';
import {GetProjectInvitationLink} from '../../../../../../../types';
import UseUserProvider from '../../../../../../hooks/user-provider/userProvider.hook.ts';
import {ErrorMessage} from '../../../../../../../styles/utils.styles.tsx';

const InvitationsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const TabsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const Tab = styled.h1<{selected: boolean}>`
    font-size: 1rem;
    font-weight: 500;
    color: ${p => (p.selected ? '#e3e3e3' : '#616161')};
    cursor: pointer;

    padding-bottom: 0.5rem;

    border-radius: 0.2rem;
    border-bottom: 0.2rem solid;
    border-color: ${p => (p.selected ? '#e3e3e3' : '#616161')};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e3e3e3;
        border-bottom: 0.2rem solid #e3e3e3;
    }
`;

const TabElementContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 2rem;
`;

const Invitations = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();

    const tabs = [
        {
            title: 'Invite via Email',
            content: <EmailInvitation />,
        },
        {
            title: 'Invite via Link',
            content: (
                <LinkInvitation link={GetProjectInvitationLink(pCtx.value)} />
            ),
        },
    ];

    return (
        <InvitationsContainer>
            <TabsContainer>
                {tabs.map((tab, index) => (
                    <Tab
                        onClick={() => setSelectedTab(index)}
                        selected={selectedTab === index}
                        key={index}
                    >
                        {tab.title}
                    </Tab>
                ))}
            </TabsContainer>
            <TabElementContainer>
                {uCtx.value.id === pCtx.value.owner ? (
                    tabs[selectedTab].content
                ) : (
                    <ErrorMessage>
                        Only the owner can invite new members!
                    </ErrorMessage>
                )}
            </TabElementContainer>
        </InvitationsContainer>
    );
};

export default Invitations;
