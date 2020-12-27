import { Moment } from 'moment';

export interface IArticle {
  id?: number;
  createdDate?: string;
  lastModifiedDate?: string;
  createdBy?: string;
  lastModifiedBy?: string;
  text?: string;
  published?: boolean;
  authorLogin?: string;
  authorId?: number;
}

export const defaultValue: Readonly<IArticle> = {
  published: false,
};
