export default class UserInfo {
    constructor({ profileNameSelector, profileInfoSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._info = document.querySelector(profileInfoSelector);
    }

    getUserInfo() {
        const userInfo = {
            userName: this._name.textContent,
            userAbout: this._info.textContent
        }
        return userInfo
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.userName;
        this._info.textContent = userInfo.userAbout;
    }
}