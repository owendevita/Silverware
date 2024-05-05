from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Restaurant, Waitlist

@receiver(post_save, sender=Restaurant)
def create_related_models(sender, instance, created, **kwargs):
    if created:
        Waitlist.objects.create(restaurant=instance, list=[])
        Waitlist.objects.create(restaurant=instance, list=[])