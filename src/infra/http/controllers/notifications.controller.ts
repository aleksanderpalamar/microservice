/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../app/use-cases/send-notification';
import { CreateNotificationBody } from '../../http/dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {} 

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {recipientId, content, category} = body
    
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {notification};
  }
}
