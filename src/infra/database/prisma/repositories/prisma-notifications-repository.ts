/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../app/entities/notification';
import { NotificationRepository } from '../../../../app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createAt: notification.createdAt,
      }
    })
  }
}
