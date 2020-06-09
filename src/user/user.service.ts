import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(user: UserDto): Promise<User> {
    const existingUser: null | User = await this.findOne(user.username);
    if (existingUser) {
      throw new HttpException(
        `User ${existingUser.username} already exists`,
        400,
      );
    } else {
      const createdUser = new this.userModel(user);
      return createdUser.save();
    }
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
