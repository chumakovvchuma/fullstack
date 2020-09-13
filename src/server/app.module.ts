import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { UsersModule } from './users/user.module'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from './users/user.entity'; 
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
     UsersModule(),
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,      
      username: 'root',
      password: 'root',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
    }),
     PostsModule,
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
