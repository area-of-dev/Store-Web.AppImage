# Generated by Django 2.2.10 on 2020-06-01 01:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('package', '0015_packageupload_customer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='packageupload',
            name='customer',
        ),
    ]
