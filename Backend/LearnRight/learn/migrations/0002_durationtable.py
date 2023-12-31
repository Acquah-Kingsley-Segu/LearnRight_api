# Generated by Django 4.2.7 on 2023-11-09 11:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('learn', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DurationTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repeat_day', models.IntegerField()),
                ('concept', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='learn.concept')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
