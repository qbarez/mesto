export default class UserInfo {
    constructor({ profileNameSelector, profileInfoSelector, profileAvatarSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._info = document.querySelector(profileInfoSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
      return {
        userName: this._name.textContent,
        userAbout: this._info.textContent,
        avatar: this._avatar.src
      }
    }

    setUserInfo(data) {
      if (data.name) this._name.textContent = data.name;
      if (data.about) this._info.textContent = data.about;
      this.setAvatar(data);
    }

    setAvatar(data) {
      if (data.avatar) this._avatar.src = data.avatar;
      if (data.name) this._avatar.alt = data.name;
    }
}