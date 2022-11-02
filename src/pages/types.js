

export interface IClient {
    _id?: string;
    name?: string;
    search?: string;
    owner?: {
        name: string;
        _id: string;
    };

    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
    phones?: IPhone[];
    address?: IAddress;
    createdAt?: string;
    updatedAt?: string;
}