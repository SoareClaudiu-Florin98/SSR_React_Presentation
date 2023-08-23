export default interface LoginRequestDto {
    token: string
    refreshToken: string,
    expiresAt: Date
}