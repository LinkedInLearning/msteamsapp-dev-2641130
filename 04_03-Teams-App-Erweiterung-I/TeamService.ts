import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IUser } from "../models/IUser";

export async function getGroupMembers(groupGuid: string, context: WebPartContext): Promise<IUser[]> {
    const client = await context.msGraphClientFactory.getClient("3");

    const users: IUser[] = [];
    const response = await client.api(`/groups/${groupGuid}/members?$expand=*`).get();
    if (response && response.value) {
        response.value.forEach((element: any) => {
            const picture = "";
            users.push({
                id: element.id,
                displayName: element.displayName,
                userPrincipalName: element.userPrincipalName,
                mail: element.mail,
                profilePicture: picture
            });
        });
    }
    return users;
}
