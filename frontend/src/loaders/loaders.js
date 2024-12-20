import { processActivity } from "../util/loaderUtility";
import { getTillExpiry } from "../util/algo";

export async function profileLoader({ request }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/profile/myprofile",
            {
                method: "GET",
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            console.log(result);
            const obj = processActivity(result.activity);
            return { ...result, pActivity: obj };
        }
    } catch (err) {
        console.log(err);
        throw err;
    }


}

export async function profileViewLoader({ request, params }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/profile/viewprofile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: params.userId
                }),
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            console.log(result);
            const obj = processActivity(result.activity);
            return { ...result, pActivity: obj };
        }
    } catch (err) {
        console.log(err);
        throw err;
    }


}

export async function vaultReceiptsViewLoader({ request, params }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/vault/getreceipts",
            {
                method: "GET",
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            for (let i of result) {
                i.details.recDate = new Date(new Date(i.details.recDate).toLocaleDateString()).toDateString();
                i.details.createdOn = new Date(new Date(i.details.createdOn).toLocaleDateString()).toDateString();
            }
            result.reverse();
            console.log(result);
            return result
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function vaultWarrantyViewLoader({ request, params }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/vault/getwarranties",
            {
                method: "GET",
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            for (let i of result) {
                i.details.warDate = new Date(new Date(i.details.warDate).toLocaleDateString()).toDateString();
                i.details.createdOn = new Date(new Date(i.details.createdOn).toLocaleDateString()).toDateString();
                i.details.expiry.date = i.details.expiry.date === null ? null : new Date(new Date(i.details.expiry.date).toLocaleDateString()).toDateString();
                i.details.expiry.till = getTillExpiry(new Date(), new Date(i.details.expiry.date));
                if (i.details.expiry.renewedOn) {
                    i.details.expiry.renewedOn = new Date(new Date(i.details.expiry.renewedOn).toLocaleDateString()).toDateString();
                }
            }
            result.reverse();
            console.log(result);
            return result
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function receiptViewLoader({ request, params }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/vault/getreceipt",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recId: params.recId
                }),
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            result.details.recDate = new Date(new Date(result.details.recDate).toLocaleDateString()).toDateString();
            result.details.createdOn = new Date(new Date(result.details.createdOn).toLocaleDateString()).toDateString();
            console.log(result);
            return result
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function warrantyViewLoader({ request, params }) {
    try {
        const res = await fetch(
            import.meta.env.VITE_BACKEND_API + "/vault/getwarranty",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    warId: params.warId
                }),
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw "500"
        } else {
            const result = await res.json();
            result.details.warDate = new Date(new Date(result.details.warDate).toLocaleDateString()).toDateString();
            result.details.createdOn = new Date(new Date(result.details.createdOn).toLocaleDateString()).toDateString();
            result.details.expiry.date = new Date(new Date(result.details.expiry.date).toLocaleDateString()).toDateString();
            result.details.expiry.till = getTillExpiry(new Date(), new Date(result.details.expiry.date));
            if (result.details.expiry.renewedOn) {
                result.details.expiry.renewedOn = new Date(new Date(result.details.expiry.renewedOn).toLocaleDateString()).toDateString();
            }
            console.log(result);
            return result
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}
