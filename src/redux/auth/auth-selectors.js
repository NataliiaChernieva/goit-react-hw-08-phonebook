const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFeatchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrentUser,
};

export default authSelectors;