from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class AddPostForm(forms.Form):
    new_post = forms.CharField(max_length=1000, help_text="Add a post.")
    def clean_new_post(self):
        data = self.cleaned_data['new_post']
        return data
