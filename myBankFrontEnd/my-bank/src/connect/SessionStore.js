class SessionStore {
    saveData(key, value) {
        sessionStorage.setItem(key, value);
    }

    getData(key) {
        return sessionStorage.getItem(key);
    }

    isUserLogged() {
        return sessionStorage.getItem("loggedUserId") !== null;
    }

}

export default new SessionStore();