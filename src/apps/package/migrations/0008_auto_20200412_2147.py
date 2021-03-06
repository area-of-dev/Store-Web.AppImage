# Generated by Django 2.2 on 2020-04-12 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('package', '0007_auto_20200412_2143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='package',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='package',
            name='package',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='package',
            name='slug',
            field=models.CharField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='package',
            name='token',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
