export class UserInfo {

    username: string;
    password: string;
    admin: boolean;
    constructor() {
        this.password = '';
        this.username = '';
        this.admin = false;
    }
}
