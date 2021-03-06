# Generated by Django 2.2.6 on 2019-10-23 08:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('priority', models.CharField(choices=[('Urgent', 'Urgent'), ('Moderate', 'Moderate'), ('Normal', 'Normal')], default='Normal', max_length=15, verbose_name='priority')),
                ('description', models.TextField()),
                ('expiry', models.DateTimeField(default=django.utils.timezone.now)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='notice_categories', to='notices.Category')),
                ('city', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.PROTECT, to='accounts.City')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.PROTECT, to='accounts.Department')),
                ('office', models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.PROTECT, to='accounts.Office')),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
    ]
