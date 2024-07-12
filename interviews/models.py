from django.db import models

class BusinessProfile(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    contact_email = models.EmailField()

class JobDescription(models.Model):
    business = models.ForeignKey(BusinessProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    keywords = models.TextField()  # Add keywords for scoring

class CandidateProfile(models.Model):
    job = models.ForeignKey(JobDescription, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    cv = models.TextField()
    cover_letter = models.TextField()
    score = models.FloatField(default=0)

    def save(self, *args, **kwargs):
        from .utils import evaluate_text
        keywords = self.job.keywords.split()
        self.score = (evaluate_text(self.cv, keywords) + evaluate_text(self.cover_letter, keywords)) / 2
        super().save(*args, **kwargs)
