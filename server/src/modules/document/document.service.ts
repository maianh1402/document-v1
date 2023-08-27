import { Injectable } from '@nestjs/common';
import { Star, data } from 'src/data';
import { v4 as uuid } from 'uuid';

interface Document {
  title: string;
  description: string;
  image: string;
}
@Injectable()
export class DocumentService {
  getDocumentByStar(star: Star) {
    return data.data.filter((item) => item.star === star);
  }

  getDocumentById(star: Star, id: string) {
    return data.data
      .filter((item) => item.star === star)
      .find((item) => item.id === id);
  }

  //   @Get()
  //   getListDocuments() {
  //     return [];
  //   }

  createDocument({ title, description, image }: Document, star: Star) {
    const newDocument = {
      id: uuid(),
      title,
      description,
      image,
      created_at: new Date(),
      updated_at: new Date(),
      star,
    };
    data.data.push(newDocument);
    return newDocument;
  }

  updateDocument(star: Star, id: string, body: Document) {
    const documentToUpdate = data.data
      .filter((item) => item.star === star)
      .find((item) => item.id === id);

    if (!documentToUpdate) return;

    const documentIndex = data.data.findIndex(
      (item) => item.id === documentToUpdate.id,
    );
    data.data[documentIndex] = {
      ...data.data[documentIndex],
      ...body,
      updated_at: new Date(),
    };
    return data.data[documentIndex];
  }

  deleteDocument(id: string) {
    const documentIndex = data.data.findIndex((item) => item.id === id);
    if (documentIndex === -1) return;

    data.data.splice(documentIndex, 1);
    return 'del';
  }
}
