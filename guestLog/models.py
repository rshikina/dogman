from django.db import models
from django.urls import reverse
import uuid

class SubmitTitle(models.Model):
    submitTitle_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.submitTitle_text

class SinglePost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular post across whole library')
    post_text = models.TextField(max_length=1000)
    pubdate = models.DateTimeField(verbose_name='date published')

    class Meta:
        ordering = ['-pubdate']

    def __str__(self):
        return self.post_text
    
    #not done yet
    def get_absolute_url(self):
        return reverse('smallPost-detail', args=[str(self.id)])
    