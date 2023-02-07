import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, Req } from '@nestjs/common';

// business logic
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'hello signup' };
  }

  signin() {
    return { message: 'hello signin' };
  }
}
