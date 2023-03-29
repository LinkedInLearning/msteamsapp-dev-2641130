var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './TeamAssistant.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var TeamAssistant = /** @class */ (function (_super) {
    __extends(TeamAssistant, _super);
    function TeamAssistant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamAssistant.prototype.render = function () {
        var _a = this.props, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName, userEmailAddress = _a.userEmailAddress;
        return (React.createElement("section", { className: "".concat(styles.teamAssistant, " ").concat(hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("h2", null,
                    "Well done, ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("h3", null,
                    "Your email address is ",
                    escape(userEmailAddress)))));
    };
    return TeamAssistant;
}(React.Component));
export default TeamAssistant;
//# sourceMappingURL=TeamAssistant.js.map