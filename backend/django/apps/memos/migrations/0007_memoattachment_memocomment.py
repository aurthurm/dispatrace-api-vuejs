# Generated by Django 2.2.6 on 2019-10-25 17:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('memos', '0006_auto_20191024_1130'),
    ]

    operations = [
        migrations.CreateModel(
            name='MemoComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('commenter', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
                ('memo', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='memocomment_comment', to='memos.Memo')),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='memocomment_sub_comment', to='memos.MemoComment')),
            ],
            options={
                'verbose_name': 'memo comment',
                'verbose_name_plural': 'memo comments',
            },
        ),
        migrations.CreateModel(
            name='MemoAttachment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('memo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='memos.Memo')),
            ],
        ),
    ]
