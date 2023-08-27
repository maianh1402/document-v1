import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { Star, data } from 'src/data';
import { DocumentService } from './document.service';

@Controller('document/:star')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  @Get()
  getDocumentByStar(@Param('star', new ParseEnumPipe(Star)) star: string) {
    const numberStar =
      star === '1'
        ? Star.star_1
        : star === '2'
        ? Star.star_2
        : star === '3'
        ? Star.star_3
        : star === '4'
        ? Star.star_4
        : Star.star_5;
    return this.documentService.getDocumentByStar(numberStar);
  }

  @Get(':id')
  getDocumentById(
    @Param('star', new ParseEnumPipe(Star)) star: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const numberStar =
      star === '1'
        ? Star.star_1
        : star === '2'
        ? Star.star_2
        : star === '3'
        ? Star.star_3
        : star === '4'
        ? Star.star_4
        : Star.star_5;
    return this.documentService.getDocumentById(numberStar, id);
  }

  //   @Get()
  //   getListDocuments() {
  //     return [];
  //   }

  @Post()
  createDocument(
    @Body()
    {
      title,
      description,
      image,
    }: {
      title: string;
      description: string;
      image: string;
    },
    @Param('star') star: string,
  ) {
    const numberStar =
      star === '1'
        ? Star.star_1
        : star === '2'
        ? Star.star_2
        : star === '3'
        ? Star.star_3
        : star === '4'
        ? Star.star_4
        : Star.star_5;
    return this.documentService.createDocument(
      {
        title,
        description,
        image,
      },
      numberStar,
    );
  }

  @Put(':id')
  updateDocument(
    @Param('star', new ParseEnumPipe(Star)) star: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    body: {
      title: string;
      description: string;
      image: string;
    },
  ) {
    const numberStar =
      star === '1'
        ? Star.star_1
        : star === '2'
        ? Star.star_2
        : star === '3'
        ? Star.star_3
        : star === '4'
        ? Star.star_4
        : Star.star_5;
    const documentToUpdate = data.data
      .filter((item) => item.star === numberStar)
      .find((item) => item.id === id);

    if (!documentToUpdate) return;

    const documentIndex = data.data.findIndex(
      (item) => item.id === documentToUpdate.id,
    );
    data.data[documentIndex] = {
      ...data.data[documentIndex],
      ...body,
    };
    return this.documentService.updateDocument(numberStar, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteDocument(@Param('id', ParseUUIDPipe) id: string) {
    return this.documentService.deleteDocument(id);
  }
}
