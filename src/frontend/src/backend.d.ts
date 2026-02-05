import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface InquiryInput {
    subject: string;
    body: string;
    messageType: MessageType;
}
export interface Inquiry {
    id: bigint;
    submitter: Principal;
    subject: string;
    body: string;
    messageType: MessageType;
}
export interface UserProfile {
    name: string;
}
export enum MessageType {
    complaint = "complaint",
    inquiry = "inquiry",
    suggestion = "suggestion",
    praise = "praise"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createInquiry(input: InquiryInput): Promise<bigint>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getInquiry(id: bigint): Promise<Inquiry | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    listInquiries(): Promise<Array<Inquiry>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
