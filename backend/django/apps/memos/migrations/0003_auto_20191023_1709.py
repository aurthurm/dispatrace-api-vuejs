# Generated by Django 2.2.6 on 2019-10-23 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('memos', '0002_delete_attachment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='memo',
            options={'ordering': ['-created'], 'permissions': (('add_comment', 'Comment Memo'),), 'verbose_name': 'memorandum', 'verbose_name_plural': 'memorandums'},
        ),
    ]
