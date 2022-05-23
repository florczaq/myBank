import axios from "axios";

class Connect {

    getAddress() {
        return 'http://localhost:8080';
    }

    getUserNameById(accountNumber) {
        let address = this.getAddress();
        return axios.get(`${address}/${accountNumber}/name`);
    }

    createNewUser(customer) {
        let address = this.getAddress();
        return axios.post(`${address}/register/new-customer`, customer);
    }

    userExist(username, password) {
        let address = this.getAddress();
        return axios.get(`${address}/login/${username}/${password}`);
    }

    getUserSpecificInfo(id, parameter) {
        let address = this.getAddress();
        return axios.get(`${address}/${id}/userinfo/account_informations/${parameter}`);
    }

    getUserInfo(id) {
        let address = this.getAddress();
        return axios.get(`${address}/${id}/userinfo/account_informations`);
    }

    makeTransaction(transaction) {
        let address = this.getAddress();
        return axios.post(`${address}/new-transaction`, transaction);
    }

    saveMoney(id, value) {
        let address = this.getAddress();
        return axios.put(`${address}/${id}/save-money/${value}`);
    }

    payOutMoney(id, value) {
        let address = this.getAddress();
        return axios.put(`${address}/${id}/pay-out-money/${value}`);
    }

    getBalanceHistory(id) {
        let address = this.getAddress();
        return axios.get(`${address}/${id}/balance-history`);
    }

    isUsernameTaken(username) {
        let address = this.getAddress();
        return axios.get(`${address}/isTaken/${username}`);
    }

    updateCustomerInfo(id, valueName, newValue) {
        let address = this.getAddress();
        return axios.put(
            `${address}/${id}/update/${valueName}/${newValue}`
        );
    }

    deleteAccount(id) {
        let address = this.getAddress();
        return axios.delete(`${address}/delete-account/${id}`)
    }
}

export default new Connect();