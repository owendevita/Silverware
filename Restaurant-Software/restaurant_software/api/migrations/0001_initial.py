# Generated by Django 5.0.2 on 2024-05-06 20:06

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('first_name', models.CharField(max_length=25)),
                ('last_name', models.CharField(max_length=25)),
                ('employee_id', models.PositiveIntegerField(unique=True)),
                ('password', models.CharField(max_length=128)),
                ('permissions', models.JSONField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=35)),
                ('current_layout', models.PositiveSmallIntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('table_number', models.PositiveSmallIntegerField()),
                ('items', models.JSONField()),
                ('complete', models.BooleanField()),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('items', models.JSONField()),
                ('name', models.CharField(max_length=25)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
            ],
        ),
        migrations.AddField(
            model_name='employee',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant'),
        ),
        migrations.CreateModel(
            name='RestaurantLayout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('layout', models.JSONField()),
                ('name', models.CharField(max_length=50)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='Waitlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list', models.JSONField()),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.restaurant')),
            ],
        ),
    ]
