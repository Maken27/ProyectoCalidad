export interface User{
    id?: number; //Si tiene ? -> Significa que es opcional.
    name: String;
    age: number;
    password: String;
    email: String; 
    created_ad?: String;
    update_ad?: String;
}