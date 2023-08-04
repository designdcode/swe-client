import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { HydratedDocument } from 'mongoose';

interface FileProps {
  fileName: string;
  path: string;
}

export type ExplorerDocument = HydratedDocument<Explorer>;

@Schema()
export class Explorer {
  @Prop()
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  label: string;

  @Prop()
  value: number;

  @Prop({
    type: raw({
      fileName: { type: String },
      path: { type: String },
    }),
  })
  files?: Record<string, any>;

  @Prop()
  children?: Explorer[];

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;
}

export const ExplorerSchema = SchemaFactory.createForClass(Explorer);
