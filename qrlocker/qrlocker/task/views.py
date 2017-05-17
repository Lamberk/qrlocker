from rest_framework import viewsets

from qrlocker.task.models import Task
from qrlocker.task.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
