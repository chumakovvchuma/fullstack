import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { UsersModule } from './users/users.module'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from './users/user.entity'; 
import { PostModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
   UsersModule.forRoot({}),,
      GraphQLModule.forRoot({
  autoSchemaFile: 'schema.gql',
}),
ConfigModule.forRoot({
  validationSchema: Joi.object({
    //...
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRATION_TIME: Joi.string().required(),
  })
}),
TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,      
      username: 'chumakovv',
      password: 'password',
      database: 'blogdb',
      synchronize: true,
      autoLoadEntities: true,
    }),
     PostModule,
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
