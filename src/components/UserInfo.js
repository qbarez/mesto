export default class UserInfo {
    constructor({ profileName, profileInfo }) {
        this._name = profileName;
        this._info = profileInfo;
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