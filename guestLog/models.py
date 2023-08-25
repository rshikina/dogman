from django.db import models
from django.urls import reverse

class SubmitTitle(models.Model):
    submitTitle_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.submitTitle_text

class SmallPost(models.Model):
    small_post = models.TextField(max_length=1000)
    pubdate = models.DateTimeField(verbose_name='date published')

    class Meta:
        ordering = ['-pubdate']

    def __str__(self):
        return self.small_post
    
    def get_absolute_url(self):
        return reverse('smallPost-detail', args=[str(self.id)])
    