export interface AuthResponse {
    user: {
        id: number,
        user: string,
        email: string,
        password: string,
        access_token: string,
        expires_in: number
    }
}
