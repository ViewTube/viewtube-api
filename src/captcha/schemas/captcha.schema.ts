import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Captcha extends Document {
  @Prop()
  clientToken: string;

  @Prop()
  solution: string;
}

export const CaptchaSchema = SchemaFactory.createForClass(Captcha);
