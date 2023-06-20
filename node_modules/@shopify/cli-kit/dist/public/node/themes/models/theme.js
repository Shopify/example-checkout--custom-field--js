export const DEVELOPMENT_THEME_ROLE = 'development';
export class Theme {
    constructor(id, name, _role, createdAtRuntime = false) {
        this.id = id;
        this.name = name;
        this._role = _role;
        this.createdAtRuntime = createdAtRuntime;
    }
    get role() {
        if (this._role === 'main') {
            return 'live';
        }
        else {
            return this._role;
        }
    }
    set role(_role) {
        if (_role === 'live') {
            this._role = 'main';
        }
        else {
            this._role = _role;
        }
    }
    get hasDevelopmentRole() {
        return this.role === DEVELOPMENT_THEME_ROLE;
    }
}
//# sourceMappingURL=theme.js.map