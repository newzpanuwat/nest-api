import { Injectable } from '@nestjs/common';

// business logic
@Injectable({})
export class AuthService {
  signin() {
    return { message: 'hello signin' };
  }

  signup() {
    return { message: 'hello signup' };
  }
}
