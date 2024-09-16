export type bookingsType = {
    id: string;
    date: Date;
    slot: string;
    email: string;
    domainId: string | null;
    createdAt: Date;
    Customer: {
        Domain: {
            name: string;
        } | null;
    } | null;
}[]