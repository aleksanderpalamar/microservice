/* eslint-disable prettier/prettier */
import { Notification } from "../../src/app/entities/notification"
import { NotificationRepository } from "../../src/app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}