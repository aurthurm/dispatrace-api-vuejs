# Generated by Django 2.2.6 on 2019-10-24 09:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('memos', '0005_auto_20191023_1824'),
    ]

    operations = [
        migrations.RenameField(
            model_name='memo',
            old_name='memo_type',
            new_name='accesibility',
        ),
    ]