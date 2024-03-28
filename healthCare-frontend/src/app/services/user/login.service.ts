import { Injectable } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { Credentials } from '../../interfaces/credentials';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../../interfaces/authentication';
import { User } from '../../interfaces/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = `${environment.baseApiUrl}login`;

  constructor(
    private utilsService: UtilsService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}

  async login(credentials: Credentials) {
    try {
      console.log('entrou no login');
      const result = await this.oauthLogin(credentials);
      console.log('result oauth login:', result);

      await this.userService
        .getByEmail(result.user.email)
        .then((user) => {
          console.log('user:', user);
          if (!user) return;

          if (user.situacao === 'I') {
            this.utilsService.showSimpleMessage('Usuário inativo');
            return;
          }

          this.router.navigate(['']);
          this.utilsService.setItemLocalStorage(
            'tokenHealthcare',
            btoa(JSON.stringify(result.token))
          );
          this.utilsService.setItemLocalStorage(
            'userHealthCare',
            btoa(JSON.stringify(user))
          );
          this.utilsService.showSimpleMessage('Login realizado com sucesso');
        })
        .catch(() => {
          this.utilsService.showSimpleMessage(
            'Erro no sistema, tente novamente mais tarde'
          );
        });
    } catch {
      this.utilsService.showSimpleMessage('Login inválido');
    }
  }

  oauthLogin(credentials: Credentials): Promise<AuthResponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.username);
    params = params.append('password', credentials.password);

    return lastValueFrom(
      this.http.get<AuthResponse>(this.apiUrl, {
        params: params,
      })
    );
  }

  logout() {
    this.utilsService.removeItemLocalStorage('tokenHealthcare');
    localStorage.removeItem('userHealthCare');
    this.router.navigate(['login']);
  }

  get getLoggedUser(): User {
    return this.utilsService.getItemLocalStorage('userHealthCare')
      ? JSON.parse(
          atob(this.utilsService.getItemLocalStorage('userHealthCare')!)
        )
      : null;
  }

  get getLoggedUserId() {
    return this.utilsService.getItemLocalStorage('userHealthCare')
      ? Number(
          JSON.parse(
            atob(this.utilsService.getItemLocalStorage('userHealthCare')!)
          ).id
        )
      : null;
  }

  get getUserToken(): string {
    return this.utilsService.getItemLocalStorage('tokenHealthcare')
      ? JSON.parse(
          atob(this.utilsService.getItemLocalStorage('tokenHealthcare')!)
        )
      : null;
  }

  get logged(): boolean {
    return this.utilsService.getItemLocalStorage('tokenHealthcare')
      ? true
      : false;
  }

  sendActivateAccountEmail(userId: number): Promise<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);

    return lastValueFrom(
      this.http.put(`${this.apiUrl}/send-activate-account-email`, null, {
        params,
        responseType: 'text',
      })
    );
  }

  sendChangePasswordEmail(userId: number): Promise<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);

    return lastValueFrom(
      this.http.put(`${this.apiUrl}/send-change-password-email`, null, {
        params,
        responseType: 'text',
      })
    );
  }

  changePassword(userId: number, newPassword: string): Promise<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('newPassword', newPassword);

    return lastValueFrom(
      this.http.put(`${this.apiUrl}/change-password/${userId}`, null, {
        params,
        responseType: 'text',
      })
    );
  }
}