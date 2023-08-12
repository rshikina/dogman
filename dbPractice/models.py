from django.db import models

# Create your models here.


class MathProblemManager(models.Manager):
    def create_problem(self, problem):
        new_problem = self.create(the_problem=problem)

        return new_problem

class MathProblem(models.Model):

    the_problem = models.CharField(max_length = 100)
    objects = MathProblemManager()

    # user_session = models.ForeignKey(author, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.the_problem

class Person(models.Model):
    SHIRT_SIZES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    )
    name = models. CharField(max_length=60)
    shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES)
