# Generated by Django 2.2.6 on 2019-10-23 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='accountprofile',
            options={'verbose_name': 'user profile', 'verbose_name_plural': 'user profiles'},
        ),
    ]