import getCurrentUser from "../actions/getCurrentUser";
import AdminViewsClient from "./AdminViewsClient";

import ClientOnly from "../components/ClientOnly";
import Button from "../components/Button";

const AdminPage = async () => {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <AdminViewsClient 
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default AdminPage;