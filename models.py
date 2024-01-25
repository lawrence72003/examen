# models.py
from django.db import models

class Participant(models.Model):
    name = models.CharField(max_length=100)

class Event(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(Participant, related_name='events', through='Participation')

class Participation(models.Model):
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    is_organizer = models.BooleanField(default=False)
