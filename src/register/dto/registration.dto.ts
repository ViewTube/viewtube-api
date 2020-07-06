export interface RegistrationDto {
  username: string;
  password: string;
  captchaToken: string;
  captchaSolution: string;
}