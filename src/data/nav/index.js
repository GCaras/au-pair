const navData = {
    userLinks: (profileUrl, logoutUrl) => {
        return [
            {
                id: 'userLink1',
                linkDisplayText: 'Profile',
                linkDestination: profileUrl,
                linkDescription: 'This will take you to the profile page',
                newWindow: false,
                internalLink: true,
                handleClick: () => {
                    window.alert('profile clicked')
                },
                icon: null
            },
            {
                id: 'userLink2',
                linkDisplayText: 'Logout',
                linkDestination: logoutUrl,
                linkDescription: 'This will log you out',
                newWindow: false,
                blurToButton: true,
                internalLink: true,
                handleClick: () => {
                    window.alert('logout clicked')
                },
                icon: null
            }
        ]
    },
    navLinks: [
        {
            id: 'navLink1',
            linkDisplayText: 'Home',
            linkDestination: '/',
            linkDescription: 'This will take you to the homepage',
            newWindow: false,
        },
        {
            id: 'navLink2',
            linkDisplayText: 'Placeholder Nav',
            linkDestination: '/placeholder',
            linkDescription: 'This will take you to the placeholder page',
            newWindow: false,
        },
    ]
}

export default navData;