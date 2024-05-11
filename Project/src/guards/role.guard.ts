import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  private rolesPassed: string[];

  constructor(roles: string[]) {
    this.rolesPassed = roles;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user;
    const userType = user.userType;
    if (this.rolesPassed.includes(userType)) {
      return true;
    }

    throw new HttpException(
      'You are not authorized to access this resource',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
