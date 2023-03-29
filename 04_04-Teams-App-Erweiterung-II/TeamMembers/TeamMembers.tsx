import * as React from "react";
import styles from './TeamMembers.module.scss';
import { useState, useEffect } from "react";
import { Provider, Flex, Text, Avatar} from "@fluentui/react-northstar";
import { useTeams } from "msteams-react-base-component";
import { ITeamMembersProps } from "./ITeamMembersProps";
import { getGroupMembers } from "../../services/TeamService";
import { IUser } from "../../models/IUser";

export const TeamMembers = (props: ITeamMembersProps): JSX.Element =>  {
    const [error, setError] = useState<string>();
    const [{context, theme}] = useTeams({});

    const [groupMembers, setGroupMembers] = useState<IUser[]>([]);    

    useEffect(() => {
        if (context !== undefined && context.team !== undefined && context.team.groupId !== undefined) { 
            const groupId = context.team.groupId;

            // get all members of this team
            getGroupMembers(groupId, props.context).then((users) =>{
                setGroupMembers(users);
            }).catch((error) => {
                console.log(error);
                setError(error);
            });
        }
    }, [context]);
    

    /**
     * The render() method
     */
    return (
        <Provider className={`${styles.TeamMemberArea} ${props.hasTeamsContext ? 'teams' : ''}`} theme={theme}>
            <Flex space="between">
                {
                    (groupMembers !== undefined && groupMembers.length > 0) &&
                    <>
                        {
                            groupMembers.map(u => 
                                <div key={u.id} className={styles.teamMember}>
                                    <Avatar size="larger" name={u.displayName} />
                                    <div className={styles.teamMemberName}>{u.displayName}</div>
                                </div>
                            )
                        }
                    </>
                }
            </Flex>
            {error && <div><Text content={`Es ist ein Fehler aufgetreten: ${error}`} /></div>}
        </Provider>
    );
};
