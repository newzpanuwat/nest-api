import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { Authmodule } from './auth/auth.module';

@Module({
  imports: [Authmodule, PrismaModule, BookmarkModule, UserModule],
})
export class AppModule {}
