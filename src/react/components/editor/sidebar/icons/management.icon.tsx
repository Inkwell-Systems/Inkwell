const ManagementIcon = ({selected, hovered}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_212_186)">
                <path
                    d="M12 0C12.351 0.00048965 12.7018 0.0160039 13.0515 0.0465C14.166 0.1425 14.985 0.9675 15.24 1.935L15.672 3.5955C15.699 3.6945 15.7905 3.8325 15.99 3.9315C16.3365 4.1025 16.671 4.296 16.992 4.5105C17.1765 4.6335 17.3415 4.6455 17.4405 4.617L19.095 4.1625C20.061 3.8985 21.183 4.194 21.825 5.1075C22.23 5.685 22.584 6.2955 22.881 6.9345C23.3535 7.947 23.0475 9.0675 22.335 9.771L21.114 10.98C21.0405 11.052 20.967 11.2005 20.982 11.421C21.006 11.8065 21.006 12.1935 20.982 12.579C20.967 12.7995 21.039 12.948 21.114 13.02L22.335 14.229C23.0475 14.9325 23.3535 16.053 22.881 17.0655C22.5834 17.7039 22.23 18.3148 21.825 18.891C21.183 19.806 20.061 20.1015 19.095 19.836L17.442 19.383C17.3415 19.3545 17.1765 19.3665 16.992 19.4895C16.6709 19.7041 16.3362 19.8975 15.99 20.0685C15.7905 20.1675 15.699 20.3055 15.6735 20.4045L15.2385 22.0635C14.9865 23.0325 14.166 23.8575 13.0515 23.9535C12.3518 24.015 11.6481 24.015 10.9485 23.9535C9.83395 23.8575 9.01495 23.0325 8.76145 22.0635L8.32795 20.4045C8.30095 20.3055 8.20945 20.1675 8.00995 20.0685C7.66334 19.8982 7.32858 19.7048 7.00795 19.4895C6.82345 19.3665 6.65845 19.3545 6.55945 19.383L4.90495 19.8375C3.93895 20.1015 2.81695 19.806 2.17495 18.8925C1.77076 18.3152 1.41743 17.7039 1.11895 17.0655C0.646452 16.053 0.952452 14.9325 1.66345 14.229L2.88595 13.02C2.96095 12.948 3.03295 12.7995 3.01795 12.579C2.99395 12.1934 2.99395 11.8066 3.01795 11.421C3.03295 11.2005 2.96095 11.052 2.88595 10.98L1.66345 9.771C0.952452 9.0675 0.646452 7.947 1.11895 6.9345C1.41614 6.2959 1.76953 5.68499 2.17495 5.109C2.81695 4.194 3.93895 3.8985 4.90495 4.164L6.55795 4.617C6.65845 4.6455 6.82345 4.6335 7.00795 4.5105C7.32895 4.296 7.66345 4.1025 8.00995 3.9315C8.20945 3.8325 8.30095 3.6945 8.32645 3.5955L8.76145 1.9365C9.01345 0.9675 9.83395 0.1425 10.9485 0.045C11.295 0.015 11.646 0 12 0ZM11.1435 2.2875C11.0895 2.292 10.9815 2.3415 10.938 2.5065L10.5045 4.164C10.284 5.0055 9.68095 5.6145 9.00745 5.9475C8.74795 6.0765 8.49745 6.222 8.25745 6.3825C7.63195 6.7995 6.80245 7.017 5.96395 6.7875L4.30945 6.333C4.14595 6.288 4.04695 6.357 4.01695 6.4005C3.68695 6.8685 3.39895 7.3665 3.15745 7.8855C3.13645 7.932 3.12595 8.0505 3.24595 8.1705L4.46845 9.3795C5.08495 9.9885 5.31145 10.815 5.26345 11.5635C5.24545 11.8542 5.24545 12.1458 5.26345 12.4365C5.31145 13.185 5.08495 14.0115 4.46845 14.6205L3.24595 15.8295C3.12445 15.9495 3.13645 16.068 3.15745 16.1145C3.40045 16.6335 3.68695 17.13 4.01695 17.598C4.04695 17.643 4.14445 17.712 4.30945 17.667L5.96245 17.2125C6.80245 16.983 7.63195 17.2005 8.25745 17.6175C8.49895 17.778 8.74945 17.9235 9.00895 18.0525C9.67945 18.3855 10.284 18.996 10.5045 19.836L10.938 21.4935C10.9815 21.657 11.0895 21.708 11.1435 21.7125C11.7134 21.762 12.2865 21.762 12.8565 21.7125C12.9105 21.708 13.0185 21.6585 13.062 21.4935L13.4955 19.836C13.716 18.9945 14.319 18.3855 14.9925 18.0525C15.252 17.9235 15.5025 17.778 15.7425 17.6175C16.368 17.2005 17.1975 16.983 18.036 17.2125L19.6905 17.667C19.854 17.7105 19.953 17.643 19.983 17.5995C20.313 17.13 20.5995 16.6335 20.8425 16.1145C20.8635 16.068 20.874 15.9495 20.754 15.8295L19.5315 14.6205C18.915 14.0115 18.6885 13.185 18.7365 12.4365C18.7545 12.1458 18.7545 11.8542 18.7365 11.5635C18.6885 10.815 18.915 9.9885 19.5315 9.3795L20.754 8.1705C20.8755 8.0505 20.8635 7.932 20.8425 7.8855C20.6003 7.36659 20.3127 6.87015 19.983 6.402C19.953 6.357 19.8555 6.288 19.6905 6.333L18.0375 6.7875C17.1975 7.017 16.368 6.7995 15.7425 6.3825C15.5017 6.22131 15.2506 6.076 14.991 5.9475C14.3205 5.6145 13.716 5.004 13.4955 4.164L13.062 2.5065C13.0185 2.3415 12.9105 2.292 12.8565 2.2875C12.2865 2.23801 11.7134 2.23801 11.1435 2.2875ZM16.5 12C16.5 13.1935 16.0258 14.3381 15.1819 15.182C14.338 16.0259 13.1934 16.5 12 16.5C10.8065 16.5 9.66189 16.0259 8.81797 15.182C7.97406 14.3381 7.49995 13.1935 7.49995 12C7.49995 10.8065 7.97406 9.66193 8.81797 8.81802C9.66189 7.97411 10.8065 7.5 12 7.5C13.1934 7.5 14.338 7.97411 15.1819 8.81802C16.0258 9.66193 16.5 10.8065 16.5 12ZM14.25 12C14.2498 11.4031 14.0124 10.8307 13.5902 10.4087C13.168 9.98674 12.5954 9.7498 11.9985 9.75C11.4015 9.7502 10.8291 9.98752 10.4072 10.4098C9.98519 10.832 9.74825 11.4046 9.74845 12.0015C9.74865 12.5984 9.98597 13.1708 10.4082 13.5928C10.6173 13.8017 10.8655 13.9674 11.1386 14.0805C11.4117 14.1935 11.7044 14.2516 12 14.2515C12.2955 14.2514 12.5882 14.1931 12.8612 14.0799C13.1343 13.9667 13.3823 13.8008 13.5913 13.5917C13.8002 13.3827 13.9659 13.1345 14.0789 12.8614C14.1919 12.5883 14.25 12.2956 14.25 12Z"
                    fill={
                        selected ? '#18A5EC' : hovered ? '#e3e3e3' : '#B4B4B4'
                    }
                />
            </g>
            <defs>
                <clipPath id="clip0_212_186">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ManagementIcon;
