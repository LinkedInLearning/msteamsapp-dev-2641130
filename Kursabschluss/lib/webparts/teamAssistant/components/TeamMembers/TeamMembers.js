import * as React from "react";
import { Provider, Flex, Text, Avatar } from "@fluentui/react-northstar";
import styles from './TeamMembers.module.scss';
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import { getGroupMembers } from "../../services/TeamService";
export var TeamMembers = function (props) {
    var _a = useState(), error = _a[0], setError = _a[1];
    var _b = useTeams({})[0], context = _b.context, theme = _b.theme;
    var _c = useState([]), groupMembers = _c[0], setGroupMembers = _c[1];
    useEffect(function () {
        if (context !== undefined && context.team !== undefined && context.team.groupId !== undefined) {
            var groupId = context.team.groupId;
            // get all members of this team
            getGroupMembers(groupId, props.context).then(function (users) {
                setGroupMembers(users);
            }).catch(function (error) {
                console.log(error);
                setError(error);
            });
        }
    }, [context]);
    /**
     * The render() method
     */
    return (React.createElement(Provider, { className: "".concat(styles.TeamMemberArea, " ").concat(props.hasTeamsContext ? 'teams' : ''), theme: theme },
        React.createElement(Flex, { space: "between" }, (groupMembers !== undefined && groupMembers.length > 0) &&
            React.createElement(React.Fragment, null, groupMembers.map(function (u) {
                return React.createElement("div", { key: u.id, className: styles.teamMember },
                    React.createElement(Avatar, { size: "larger", name: u.displayName }),
                    React.createElement("div", { className: styles.teamMemberName }, u.displayName));
            }))),
        error && React.createElement("div", null,
            React.createElement(Text, { content: "Es ist ein Fehler aufgetreten: ".concat(error) }))));
};
//# sourceMappingURL=TeamMembers.js.map